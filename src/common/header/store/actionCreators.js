// import * as constants from "./constants";
import {constants} from "./index";
import axios from "axios";
import { fromJS } from "immutable";

const getSearchList = (data) => {
	return {
		type: constants.GET_SEARCH_LIST,
		data: data,
		totalPage: Math.ceil(data.length / 10)
	}
}

export const searchFocus = () => ({
	type: constants.SEARCH_FOCUS
})

export const searchBlue = () => ({
	type: constants.SEARCH_BLUR	
})

export const mouseEnter = () => ({
	type:constants.MOUSE_ENTER
})

export const mouseLeave = () => ({
	type: constants.MOUSE_LEAVE
})

export const clickSwitch = (page) => ({
	type: constants.CLICK_SWITCH,
	page
})

export const getList = () => {
	return (dispatch) => {
		axios.get("api/headerList.json").then((res) => {
			const data = res.data;
			dispatch(getSearchList(data.data));
		}).catch((err) => {
			console.log(err);
		})
	} 
}