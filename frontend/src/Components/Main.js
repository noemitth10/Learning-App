import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./LandingPage";
import AboutUs from "./AboutUs";
import Sentences from "./Sentences";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutus" component={AboutUs} />
    <Route path="/sentences" component={Sentences} />
  </Switch>
);
export default Main;
