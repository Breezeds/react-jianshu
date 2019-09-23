import React from 'react';
import { GlobalStyle } from "./style.js";
import "./reset.css";
import Header from "./common/header";
import {Provider} from "react-redux";
import {store} from "./store"

function App() {
  return (
    <div className="App">
			<GlobalStyle />
			<Provider store={store}>
				<Header />
			</Provider>
    </div>
  );
}

export default App;
