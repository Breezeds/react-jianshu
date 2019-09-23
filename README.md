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

#react 使用iconfont图标
	iconfont.cn下载图标，把文件放在statics下面
	引入iconfont.css引入项目中
	<i className = "iconfont iconxxx"></i>
	
#cnpm install --save react-transition-group
react动画库  <CSSTransition in = {this.state.focused} timeout = {200} classNames="slider"></CSSTransition>

#使用react-redux和redux插件
cnpm install react-redux --save
cnpm install redux --save
/store -- 
			index.js -- import {createStore} from "redux"; createStore(reducer)
			reducer.js -- 纯函数 (state,action) => {return state}
app.js --
	import {Provider} from "react-redux";
	import store from "./store"
	<Provider store={store}></Provider>
header.js
	import {connect} from "react-redux";
	mapStateToProps  mapDispatchToProps
	export default (mapStateToProps, mapDispatchToProps)(Header)

		
		
