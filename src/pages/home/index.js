import React, {Component, Fragment} from "react";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Topic from "./components/Topic";
import Writer from "./components/Writer";
import axios from "axios";
import { connect } from "react-redux";

import {
	HomeWrap,
	HomeLeft,
	HomeRight
} from "./style";

class Home extends Component {
	render() {
		return (
		<Fragment>
			<HomeWrap>
				<HomeLeft>
					<img className="banner-img" alt="" src="//upload.jianshu.io/admin_banners/web_images/4751/ac556e78c6d92523c74e49be675e1b043ebdf106.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
					<Topic />
					<List/>
				</HomeLeft>
				<HomeRight>
					<Recommend />
					<Writer />
				</HomeRight>
			</HomeWrap>
		</Fragment>
		)
	}
	
	componentDidMount() {
		axios.get("/api/home.json").then((res) => {
			const result = res.data.data;
			const action = {
				type: "home_change",
				topicList: result.topicList,
				articleList: result.articleList,
				recommendList: result.recommendList
			}
			this.props.homeChange(action);
		})
	}
}

const mapDispatchToProps = (dispatch) => ({
	homeChange(action) {
		dispatch(action);
	}
})

export default connect(null, mapDispatchToProps)(Home);