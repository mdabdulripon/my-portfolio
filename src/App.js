import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home.js";
import Footer from "./components/Footer.js";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Layout>
          {/* <Header /> */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            {/* <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
          <Footer />
        </Layout>
      </Router>
    );
  }
}

export default App;
