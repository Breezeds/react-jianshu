import axios from "axios";
import * as constants from "./constants";
import {fromJS} from "immutable";

const homeAction = (result) => ({
	type: constants.HOME_CHANGE_INS,
	topicList: result.topicList,
	articleList: result.articleList,
	recommendList: result.recommendList
})

const addHomeListAction = (list,nextPage) => ({
	type: constants.ADD_HOME_LIST,
	list: fromJS(list),
	nextPage
})

const scrollPageActionCreator = (scrollFlag) => ({
	type: constants.SCROLL_TOP_FLAG,
	scrollFlag
})

export const homeChange = () => {
	return (dispatch) => {
		axios.get("/api/home.json").then((res) => {
			const result = res.data.data;
			dispatch(homeAction(result));
		})
	}
}

export const addHomeList = (page) => {
	return (dispatch) => {
		axios.get("/api/homeList.json?page=" + page).then((res) => {
			const result = res.data.data;
			console.log(result);
			dispatch(addHomeListAction(result, page+1));
		})
	}
}

export const scrollPageAction = (scrollFlag) => {
	return (dispatch) => {
		dispatch(scrollPageActionCreator(scrollFlag))
	}
}