import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home.js";

class App extends React.Component {
  render() {
    return (
		<Router>
			<Routes>
			<Route exact path="/" element={<Home />} />
			{/* <Route path="/experience" element={<Experience />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<Contact />} /> */}
			</Routes>
		</Router>
    );
  }
}

export default App;
