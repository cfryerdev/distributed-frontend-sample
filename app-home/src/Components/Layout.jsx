import React, { Fragment } from "react";
import Navigation from "cfryerdev-dfe-react-navigation";
import Footer from "cfryerdev-dfe-react-footer";
import { state } from "cfryerdev-dfe-utility-cookiestate";

const links = [
  { name: "Home", url: "http://www.cfryerdev-mfe.info/" },
  { name: "Login", url: "http://login.cfryerdev-mfe.info/" }, 
  { name: "About", url: "http://about.cfryerdev-mfe.info/" }, 
  { name: "Products", url: "http://products.cfryerdev-mfe.info/" }
];

export default ({ children }) => {
  const id = state.getId("DFE-EXAMPLE");
  var username = undefined;
  var userState = state.getStateElement(id, "user");
  if (userState !== undefined) {
    username = userState.username;
  }
  return (
    <Fragment>
      <Navigation title="DFE Example" name={username} links={links} />
      <div className="container">{children}</div>
      <Footer year="2020" name="cfryerdev" />
    </Fragment>
  );
}
