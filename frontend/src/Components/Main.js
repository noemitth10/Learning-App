import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";

import LandingPage from "./LandingPage";
import AboutUs from "./AboutUs";
import Sentences from "./Sentences";
import Authentication from "./Authentication";
import Hub from "./Demo/Hub";

import RegisterUser from "./Authorization/Register";
import LoginUser from "./Authorization/Login";
import UserProfile from "./Authorization/UserProfile";

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

export default class Main extends Component {
  state = {};

  componentDidMount() {
    axios.get("http://localhost:8000/api/user-update/<str:pk>/").then(
      (res) => {
        this.setState({ user: res.data });
      },
      (err) => {
        console.log(err);
      }
    );
  }

  render() {
    return (
      <BrowserRouter>
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
          <Route path="/userreg" component={RegisterUser} />
          <Route path="/userlog" component={LoginUser} />
          <Route
            path="/profile"
            component={() => <UserProfile user={this.state.user} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
