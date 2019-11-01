import React, {Component, Fragment} from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom";
import { ListItem, ListInfo, LoadMore } from "../style";
import { actionCreators } from "../store";

class List extends Component {
	render() {
		const { list, loadMore, page } = this.props;
		return (
			<Fragment>
				{
					list.map((item, index) => ( 
						<Link key={index} to="/detail">
							<ListItem key={index}>
								<img className="pic" src={item.get("imgUrl")} alt="" />
								<ListInfo>
									<h3 className="title">{item.get("title")}</h3>
									<p className="desc">{item.get("desc")}</p>
								</ListInfo>
							</ListItem>
						</Link>
					))
				}
				<LoadMore onClick={ () => loadMore(page) }>加载更多</LoadMore>
			</Fragment>
		)
	}
}

const mapStateToProps = (state) => ({ //返回的是一个对象
	list: state.getIn(["home", "articleList"])  ,//immutable对象获取数据，使用get方法
	page: state.getIn(["home", "page"])
})

const mapDispatchToProps = (dispatch) => ({
	loadMore(page) {
		dispatch(actionCreators.addHomeList(page));
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(List);