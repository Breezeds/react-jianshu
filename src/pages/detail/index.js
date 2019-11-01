import React, {Component} from "react";
import {connect} from "react-redux";
import { DetailWrapper, Header, Content } from "./style";
import {actionCreators} from "./store";

class Detail extends Component {
	render () {
		const {title, content} = this.props;
		return(
			<DetailWrapper>
				<Header>{title}</Header>
				<Content 
					dangerouslySetInnerHTML={{__html: content}}
				/>
			</DetailWrapper>
		)
	}
	
	componentDidMount() {
		this.props.getDetailsList();
	}
}

const mapStateToProps = (state) => ({ //返回一个对象
	title: state.getIn(["detail", "title"]),
	content: state.getIn(["detail", "content"])
})

const mapDispatchToProps = (dispatch) => ({//返回一个对象
	getDetailsList() {
		dispatch(actionCreators.getDetailsApi());
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail);