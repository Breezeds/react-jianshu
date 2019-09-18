# react-jianshu
使用react来制作简书网站


# styled-componets
	1.安装 cnpm install --save style-components
	
	2.injectGlobal弃用，使用createGlobalStyle来替代
	
		import {createGlobalStyle} from "styled-components";
		export const Globalstyle = createGlobalStyle`body{padding:0;}`;
		import {Globalstyle} from "./style.js"
	
# reset.css

# import styled from "styled-components"
	使用：
		export const Header = styled.div`width:100px;`
		import {Header} from "./style.js";
		render(){<Header></Header>}
	tips：
		background:url("../../statics/logo.png");-->不推荐使用
		import logoPic from "../../statics/logo.png";   background:url(${logoPic})-->推荐使用
		
		
