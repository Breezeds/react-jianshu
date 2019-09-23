const defaultState = {
	focused:false
}

export default (state = defaultState, action) => {
	if(action.type === "search_focus"){
		console.log("action_foucs")
		return {
			focused: true
		}
	}
	if(action.type === "search_blur") {
		console.log("serch_blur")
		return {
			focused:false
		}
	}
	return state;
}
