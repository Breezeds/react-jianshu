import React, {PureComponent} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import { actionCreators } from "./store";

import { 
	LoginWrapper,
	LoginBox,
	Input,
	Button
} from "./style";

class Login extends PureComponent {
	render() {
		const {loginStatus} = this.props;
		if(!loginStatus) {
			return(
				<LoginWrapper>
					<LoginBox>
						<Input placeholder="账号" ref={(accout) => {this.accountEle = accout}} />
						<Input placeholder="密码" ref={(password) => {this.passwordEle = password}} type="password" />
						<Button onClick={() => this.props.login(this.accountEle, this.passwordEle)}>登录</Button>
					</LoginBox>
				</LoginWrapper>
			)
		}else {
			return <Redirect to="/" />
		}
	}
}

const mapStateToProps = (state) => ({
	loginStatus: state.getIn(["login", "login"])
})

const mapDispatchToProps = (dispatch) => ({
	login(accountElem, passwordElem){
		dispatch(actionCreators.loginCreators(accountElem.value, passwordElem.value));
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);

