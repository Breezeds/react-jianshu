// import * as constants from "./constants";
import {constants} from "./index";
import {fromJS} from "immutable";

const defaultState = fromJS({
	focused:false,
	mouseIn: false,
	list: [],
	page: 1,
	totalPage: 1
})

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.GET_SEARCH_LIST:
			return state.merge({
				"list": action.data,
				"totalPage": action.totalPage
			})
		case constants.SEARCH_FOCUS:
			return state.set("focused", true);
		case constants.SEARCH_BLUR: 
			return state.set("focused", false);
		case constants.MOUSE_ENTER: 
			return state.set("mouseIn", true);
		case constants.MOUSE_LEAVE: 
			return state.set("mouseIn", false);
		case constants.CLICK_SWITCH:
			return state.set("page", action.page);
		default:
			return state;
	}
	
	
	
// 	if(action.type === constants.GET_SEARCH_LIST) {
// 		console.log(action.data);
// 		return state.set("list", action.data);
// 	}
// 	if(action.type === constants.SEARCH_FOCUS){
		// immutable对象,set方法会结合之前的immutable对象的值和设置的值，返回一个全新的对象
		// return state.set("focused", true);
		
		// 普通对象
// 		return {
// 			focused: true
// 		}
	// }
// 	if(action.type === constants.SEARCH_BLUR) {
// 		return state.set("focused", false);
// 		return {
// 			focused:false
// 		}
	// }
	// return state;
}