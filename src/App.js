import React from "react";
import Layout from "./components/Layout.jsx";
import Header from "./components/Header";
import Intro from "./components/Intro.js";

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Header />
        <Intro />

      
      </Layout>
    );
  }
}

export default App;
