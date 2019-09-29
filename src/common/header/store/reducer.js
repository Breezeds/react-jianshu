// import * as constants from "./constants";
import {constants} from "./index";
import {fromJS} from "immutable";

const defaultState = fromJS({
	focused:false,
	list: []
})

export default (state = defaultState, action) => {
	if(action.type === constants.GET_SEARCH_LIST) {
		console.log(action.data);
		return state.set("list", action.data);
	}
	if(action.type === constants.SEARCH_FOCUS){
		// immutable对象,set方法会结合之前的immutable对象的值和设置的值，返回一个全新的对象
		return state.set("focused", true);
		
		// 普通对象
// 		return {
// 			focused: true
// 		}
	}
	if(action.type === constants.SEARCH_BLUR) {
		return state.set("focused", false);
// 		return {
// 			focused:false
// 		}
	}
	return state;
}