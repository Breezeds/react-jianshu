import React from 'react';
import { GlobalStyle } from "./style.js";
import "./reset.css";
import Header from "./common/header";
import {Provider} from "react-redux";
import {store} from "./store";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/home/index";
// import Detail from "./pages/detail/index";
import Detail from "./pages/detail/loadable";
import Login from "./pages/login/index";


function App() {
  return (
    <div className="App">
			<GlobalStyle />
			<Provider store={store}>
				<BrowserRouter>
					<Header />
					<Route path="/login" exact component={Login}></Route>
					<Route path="/" exact component={Home}></Route>
					<Route path="/detail/:id" exact component={Detail}></Route>
				</BrowserRouter>
			</Provider>
    </div>
  );
}

export default App;
