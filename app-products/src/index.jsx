import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout";
import ScrollToTop from "./Components/ScrollToTop";
import Routes from "./routes";

import "./Content/Styles/bootstrap.css";
import "./Content/Styles/main.css";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
        <Layout>
          <Routes />
        </Layout>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById("root"));
