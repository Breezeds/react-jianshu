import React from 'react';
import { GlobalStyle } from "./style.js";
import "./reset.css";
import Header from "./common/header";

function App() {
  return (
    <div className="App">
			<GlobalStyle />
			<Header />
    </div>
  );
}

export default App;
