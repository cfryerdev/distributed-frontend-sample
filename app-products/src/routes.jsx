import React from "react";
import { Switch, Route } from "react-router";

import Home from "./Components/Home";
import Product from "./Components/Product";
import Reviews from "./Components/Reviews";

const NotFound = () => (
  <div className="text-center">
    Oops what you are looking for, does not exist.
  </div>
);

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/product/:id" exact component={Product} />
    <Route path="/product/:id/reviews" exact component={Reviews} />
    {/* ELSE */}
    <Route path="*" exact component={NotFound} />
  </Switch>
);

export default Routes;
