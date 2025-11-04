import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home.js";
import Blog from "./components/Blog.js";

class App extends React.Component {
  render() {
    return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/blog" element={<Blog />} />
			</Routes>
		</Router>
    );
  }
}

export default App;
