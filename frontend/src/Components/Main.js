import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./LandingPage";
import AboutUs from "./AboutUs";
import Sentences from "./Sentences";
import Authentication from "./Authentication";
import Hub from "./Demo/Hub";

import { UserContext, UserProvider } from "./Test_auth/UserContext";
import UserList from "./Test_auth/UserList";
import UserLogin from "./Test_auth/UserLogin";

import { LessonContext, LessonProvider } from "./Demo_lesson/LessonContext";
import LessonList from "./Demo_lesson/LessonList";
import LessonNav from "./Demo_lesson/LessonNav";

import { TestContext, TestProvider } from "./Demo_test/TestContext";
import TestList from "./Demo_test/TestList";

function User() {
  return (
    <UserProvider>
      <Route path="/user" component={UserList} />
      <Route path="/userlogin" component={UserLogin} />
    </UserProvider>
  );
}

function Lesson() {
  return (
    <LessonProvider>
      <Route path="/lesson" component={LessonList} />
      <Route path="/lessonnav" component={LessonNav} />
    </LessonProvider>
  );
}

function Test() {
  return (
    <TestProvider>
      <Route path="/test" component={TestList} />
    </TestProvider>
  );
}

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutus" component={AboutUs} />
    <Route path="/sentences" component={Sentences} />
    <Route path="/login" component={Authentication} />
    <Route path="/register" component={Authentication} />
    <Route path="/hub" component={Hub} />
    <Route path="/user" component={User} />
    <Route path="/lesson" component={Lesson} />
    <Route path="/test" component={Test} />
    <Route path="/userlogin" component={UserLogin} />
  </Switch>
);
export default Main;
