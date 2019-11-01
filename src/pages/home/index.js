import React, {Component, Fragment} from "react";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Topic from "./components/Topic";
import Writer from "./components/Writer";
import axios from "axios";
import { connect } from "react-redux";
import { actionCreators } from './store';
import {BackTop} from './style';

import {
	HomeWrap,
	HomeLeft,
	HomeRight
} from "./style";

class Home extends Component {
	handleScrollTop() {
		window.scrollTo(0, 0);
	}
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
			{
				this.props.scrollShowFlag ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null
			}
		</Fragment>
		)
	}
	
	componentDidMount() {
		this.props.homeChange();
		this.bindEvents();
	}
	
	bindEvents = () => {
		window.addEventListener("scroll", this.props.scrollPage);
	}
	
	componentWillUnmount() {
		window.removeEventListener("scroll", this.props.scrollPage);
	}
}

const mapStateToProps = (state) => ({
	scrollShowFlag: state.getIn(["home", "scrollShowFlag"])
})

const mapDispatchToProps = (dispatch) => ({
	homeChange() {
		dispatch(actionCreators.homeChange());
	},
	scrollPage() {
		if(document.documentElement.scrollTop > 100) {
			dispatch(actionCreators.scrollPageAction(true));
		}else {
			dispatch(actionCreators.scrollPageAction(false));
		}
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);