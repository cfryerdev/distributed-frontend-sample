import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

export default ({ children }) => (
  <Fragment>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink class="navbar-brand" to="/">
        DFE Example
      </NavLink>
    </nav>
    <div className="container">{children}</div>
  </Fragment>
);
