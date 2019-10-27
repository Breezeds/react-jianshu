import React, { Component } from "react";
import {CSSTransition} from "react-transition-group";
import "../../statics/iconfont/iconfont.css";
import { connect } from "react-redux";
import * as actionCreators from "./store/actionCreators";
 

import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	NavSearch,
	Addition,
	Button,
	SearchWrapper,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoList,
	SearchInfoItem
} from "./style";


class Header extends Component {
	getListArea(show) {
		const { page, list, mouseIn, totalPage, handleMouseEnter, handleMouseLeave, handleSwitch } = this.props;
		const jsList = list;
		const pageList = [];
		if(jsList.length > 0) {// ajax获取数据完毕后，再渲染页面
			for(let i = (page -1) * 10; i < page * 10; i++) {
				pageList.push(
					<SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
				)
			}
		}
		
		
		if(show || mouseIn) {
			return(
				<SearchInfo onMouseEnter={ handleMouseEnter } onMouseLeave={ handleMouseLeave }>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch 
							onClick={ () => handleSwitch(page, totalPage, this.spinIcon) 
						}>
							<i ref={(spin)=>{this.spinIcon = spin}} className="iconfont iconspin spin"></i>
							换一批
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{ pageList }
						{/*
							this.props.list.map((item,index)=>{
								return(
									<SearchInfoItem key={index}>{item}</SearchInfoItem>
								)
							})
						*/}
					</SearchInfoList>
				</SearchInfo>
			)
		}else {
			return null;
		}
	}
	
	render() {
		const { focused, list, handleInputFocus } = this.props;
		return(
			<HeaderWrapper>
				<Logo href="/"></Logo>
				<Nav>
					<NavItem className="left active">首页</NavItem>
					<NavItem className="left">下载APP</NavItem>
					<NavItem className="right">登录</NavItem>
					<NavItem className="right">
						<span className="iconfont iconAa"></span>
					</NavItem>
					<SearchWrapper>
						<CSSTransition
							in={focused}
							timeout={200}
							classNames="slider"
						>
							<NavSearch
								className={focused ? "focused":""}
								onFocus={() => handleInputFocus(list) }
								onBlur = {this.props.handleInputBlur}
							></NavSearch>
						</CSSTransition>
						<span className={focused ? "focused iconfont icon41 zoom":"iconfont icon41 zoom"}></span>,
						{ this.getListArea(focused)}
					</SearchWrapper>
				</Nav>
				<Addition>
					<Button className="writting">
						<span className="iconfont iconiconset0137"></span>写文章
					</Button>
					<Button className="reg">注册</Button>
				</Addition>
			</HeaderWrapper>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		// focused: state.header.focused
		// focused: state.get("header").get("focused")
		focused: state.getIn(["header", "focused"]),
		list: state.getIn(["header", "list"]),
		page: state.getIn(["header", "page"]),
		mouseIn: state.getIn(["header", "mouseIn"]),
		totalPage: state.getIn(["header", "totalPage"])
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus(list) {
			(list.size === 0) && dispatch(actionCreators.getList());
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlue());
		},
		handleMouseEnter() {
			dispatch(actionCreators.mouseEnter());
		},
		handleMouseLeave() {
			dispatch(actionCreators.mouseLeave());
		},
		handleSwitch(page, totalPage, spinIcon) {
			let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig, '');
			if(originAngle) {
				originAngle = parseInt(originAngle, 10);
			}else {
				originAngle = 0;
			}
			spinIcon.style.transform = 'rotate(' + (originAngle+360) + 'deg)';
			
			if(page < totalPage) {
				dispatch(actionCreators.clickSwitch(page+1));
			}else {
				dispatch(actionCreators.clickSwitch(1));
			}
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);