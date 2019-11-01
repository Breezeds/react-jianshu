import axios from "axios";
import * as constants from "./constants";

const emitDetailsData = (result) => ({ //返回一个函数
	type: constants.GET_DETAILS_DATA,
	title: result.title,
	content: result.content
})

export const getDetailsApi = () => {
	return (dispatch) => {
		axios.get("api/details.json").then((res) => {
			const result = res.data.data[0];
			console.log(result);
			// console.log(Object.prototype.toString.call(result));
			dispatch(emitDetailsData(result));
		})
	}
}