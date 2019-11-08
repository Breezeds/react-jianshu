import * as constants from "./constants";
import axios from "axios";

const changLogin = () => ({
	type: constants.CHANGE_LOGIN,
	value: true
})

export const logout = () => ({
	type: constants.LOGOUT,
	value:false
})

export const loginCreators = (account, password) => {
	console.log(account, password);
	return (dispatch) => {
		axios.get("../api/login.json?accout="+account+"&password="+password).then((res) => {
			dispatch(changLogin())
		})
	}
}