import React, {Component, Fragment} from "react";
import { connect } from "react-redux";
import { ListItem, ListInfo } from "../style";

class List extends Component {
	render() {
		const { list } = this.props;
		return (
			<Fragment>
				{
					list.map((item) => ( 
						<ListItem key={item.get("id")}>
							<img className="pic" src={item.get("imgUrl")} alt="" />
							<ListInfo>
								<h3 className="title">{item.get("title")}</h3>
								<p className="desc">{item.get("desc")}</p>
							</ListInfo>
						</ListItem>
					))
				}
			</Fragment>
		)
	}
}

const mapStateToProps = (state) => ({ //返回的是一个对象
	list: state.getIn(["home", "articleList"])  //immutable对象获取数据，使用get方法
})

export default connect(mapStateToProps)(List);