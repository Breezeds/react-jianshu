import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import { DetailWrapper, Header, Content } from "./style";
import {actionCreators} from "./store";

class Detail extends Component {
	
	render () {
		console.log(this.props);
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
		this.props.getDetailsList(this.props.match.params.id);
		// this.props.getDetailsList(this.props.location.search);
	}
}

const mapStateToProps = (state) => ({ //返回一个对象
	title: state.getIn(["detail", "title"]),
	content: state.getIn(["detail", "content"])
})

const mapDispatchToProps = (dispatch) => ({//返回一个对象
	getDetailsList(id) {
		dispatch(actionCreators.getDetailsApi(id));
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));