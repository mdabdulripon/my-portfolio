import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Header from "./components/Header";
import Intro from "./components/Intro.js";
import Footer from "./components/Footer.js";
import Experience from "./components/Experience.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Layout>
          <Header />
          <Routes>
            <Route exact path="/" element={<Intro />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Layout>
      </Router>
    );
  }
}

export default App;
