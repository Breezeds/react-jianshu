import React from "react";
import Loadable from "react-loadable";

const LoadableComponent = Loadable({
	loader: () => import('./index.js'),
	loading() {
		return <div>加载中</div>
	}
})

export default class App extends React.Component {
	render() {
		return <LoadableComponent />
	}
}