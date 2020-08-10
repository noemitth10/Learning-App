import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./LandingPage";
import AboutUs from "./AboutUs";
import Sentences from "./Sentences";
import Authentication from "./Authentication";
import LogIn, { Login } from "./Authentication/Login";
import register, { Register } from "./Authentication/Register";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutus" component={AboutUs} />
    <Route path="/sentences" component={Sentences} />
    <Route path="/login" component={Authentication} />
    <Route path="/register" component={Authentication} />
  </Switch>
);
export default Main;
