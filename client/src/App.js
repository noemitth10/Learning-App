import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom"
import './App.css';

import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Main from "./components/Main"
import About from "./components/About"
import Dashboard from "./components/Dashboard"
import UpdateUser from "./components/UpdateUser"
import Login from "./components/Login"
import Register from "./components/Register"
import Menu from "./components/lessons/Menu"
import Theme from "./components/lessons/Theme"
import PracticeList from "./components/lessons/PracticeList"
import JustForTeachers from "./components/JustForTeachers"
import SVGComponent from "./components/SVGComponent"
import Board from "./components/tasks/taskTypes/Board";

import { TaskProvider } from "./components/tasks/TaskContext";
import TaskList from "./components/tasks/TaskList";

function Task() {
  return (
    <TaskProvider>
      <Route path="/test:test_id" component={TaskList} />
      <Route path="/menu" component={Menu} />
    </TaskProvider>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const role = localStorage.role;
  console.log(role)

  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  };

  useEffect(() => {
    checkAuthenticated();
    console.log(isAuthenticated)
  });

  async function checkAuthenticated() {
    try {
      const response = await fetch("http://localhost:5000/auth/is-verify", {
        method: "GET",
        headers: { token: localStorage.token }
      });

      const parseRes = await response.json();
      console.log("eredmeny: ", parseRes);
      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
        <Board>
        <Navbar isAuthenticated={isAuthenticated} setAuth={setAuth}/>
        <div className="body-container">
        <Router>
          <div className="container">
          <Switch>
            <Route exact path="/login" render={props => !isAuthenticated ? <Login {...props} setAuth={setAuth}/> : <Redirect to="/dashboard" />}/>
            <Route exact path="/register"  render={props => !isAuthenticated ?  <Register {...props} setAuth={setAuth}/> : <Redirect to="/login" />}/>
            <Route exact path="/dashboard"  render={props => isAuthenticated ? <Dashboard {...props} setAuth={setAuth}/> : <Redirect to="/login" />}/>
            <Route exact path="/update"  render={props => isAuthenticated ? <UpdateUser {...props} setAuth={setAuth}/> : <Redirect to="/login" />}/>
            <Route exact path="/test:test_id"  render={props => isAuthenticated ? <Task {...props} setAuth={setAuth}/> : <Redirect to="/login" />}/>
            <Route exact path="/teachers"  render={props => role == 3 ? <JustForTeachers {...props} setAuth={setAuth}/> : <Redirect to="/login" />}/>
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={About} />
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/test" component={SVGComponent} />
            <Route exact path="/lesson-:lesson_id" component={Theme} />
          </Switch>
          </div>
          </Router>
          </div>
          <Footer/>
          </Board>
    </>
  );
}

export default App;
