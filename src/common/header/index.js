import React, { Component } from "react";
import "../../statics/iconfont/iconfont.css";

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
						<NavSearch></NavSearch>
						<span className="iconfont icon41"></span>
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

export default Header;