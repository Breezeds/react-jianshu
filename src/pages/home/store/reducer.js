 import { fromJS } from "immutable";
 import * as constants from "./constants";
 
 const defaultState = fromJS({
	topicList: [],
	
	articleList: [],
	
	recommendList: [],
	
	page: 1,
	
	scrollShowFlag: false
 })
 
 export default (state = defaultState , action) => {
	switch(action.type) {
		case constants.HOME_CHANGE_INS:
			return homeChangeIns(state, action);
			
		case constants.ADD_HOME_LIST:
			return addHomeList(state, action);
			
		case constants.SCROLL_TOP_FLAG:
			return state.set("scrollShowFlag", action.scrollFlag)
		
		default:
			return state;
	}
 }
 
 
 const homeChangeIns = (state, action) => {
	 return state.merge({
	 	topicList: fromJS(action.topicList),
	 	articleList: fromJS(action.articleList),
	 	recommendList: fromJS(action.recommendList)
	 })
 }
 
 const addHomeList = (state, action) => {
	 return state.merge({
	 	articleList: state.get("articleList").concat(action.list),
	 	page: action.nextPage
	 })
	 // state.set("articleList", state.get("articleList").concat(action.list)); 
 }