 import { fromJS } from "immutable";
 
 const defaultState = fromJS({
	topicList: [],
	
	articleList: [],
	
	recommendList: []
 })
 
 export default (state = defaultState , action) => {
	switch(action.type) {
		case "home_change":
			return state.merge({
				topicList: fromJS(action.topicList),
				articleList: fromJS(action.articleList),
				recommendList: fromJS(action.recommendList)
			})
		default:
			return state;
	}
 }