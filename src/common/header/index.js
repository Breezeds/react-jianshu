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
		if(show) {
			return(
				<SearchInfo>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch>换一批</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{
							this.props.list.map((item,index)=>{
								return(
									<SearchInfoItem key={index}>{item}</SearchInfoItem>
								)
							})
						}
					</SearchInfoList>
				</SearchInfo>
			)
		}else {
			return null;
		}
	}
	
	render() {
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
							in={this.props.focused}
							timeout={200}
							classNames="slider"
						>
							<NavSearch
								className={this.props.focused ? "focused":""}
								onFocus={this.props.handleInputFocus}
								onBlur = {this.props.handleInputBlur}
							></NavSearch>
						</CSSTransition>
						<span className={this.props.focused ? "focused iconfont icon41":"iconfont icon41"}></span>,
						{ this.getListArea(this.props.focused)}
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
		list: state.getIn(["header", "list"])
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus() {
			dispatch(actionCreators.getList())
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlue());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);