// import * as constants from "./constants";
import {constants} from "./index";
import axios from "axios";
import { fromJS } from "immutable";

export const searchFocus = () => ({
	type: constants.SEARCH_FOCUS
})

export const searchBlue = () => ({
	type: constants.SEARCH_BLUR	
})

const getSearchList = (data) => ({
	type: constants.GET_SEARCH_LIST,
	data: data
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