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

#combineReducer	<!-- 拆分数据管理 -->
	import {combineReducers} from "redux";
	import headerReducer from "../common/header/store/reducer";
	export default combineReducers({
		header: headerReducer
	})
	mapStateToProps=(state)=>{return {focused:state.header.focused}}
	
# import {reducer as headerReducer} from "../store/reducer";//引入reducer ，别名叫做headerRducer

#combineReducer 拆分管理数据
/header/
	index 出口文件
	
#使用immutable来管理store里面的数据
	/reducer/
		import {fromJS} from "immutable";
		export default(state, action) => {
			if(action.type === "xxx") {
				return state.set("focused", true)
			}
		}
		
#redux-immutable
	cnpm install --save redux-immutable
	import {combineReducers} from "redux-immutable"
	export default combineReducers({
		header: headerReducer
	})
	使用：const mapStateToProps=(state){
		focused: state.getIn(["header", "focused"])
		//focused: state.get("header").get("focused")
	}

#cnpm install --save redux-thunk

#axios
	新建接口返回值json文件  /public/api/headerList.json
	
	引入：import {createStore, applyMiddleware} frm "redux";
		 import thunk from "redux-thunk";
		 const store = createStore(reducer, applyMiddleware(thunk));
	
	使用：const getList = () => {
		return (dispatch) => {
			axios.get(url).then((res) => {
				const data = res.data;
				dispatch(getSearchList(data.data));
			}).catch((err) => {
				
			})
		}
	}
	
	