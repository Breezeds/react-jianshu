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
	SearchWrapper
} from "./style";

class Header extends Component {
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
						<span className={this.props.focused ? "focused iconfont icon41":"iconfont icon41"}></span>
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
		focused: state.header.get("focused")
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus() {
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlue());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);