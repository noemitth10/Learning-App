import React, { useState } from "react";
import logo from "../login.svg";
import "../App.scss";
import { Login } from "./Authentication/Login";
import { Register } from "./Authentication/Register";

class Authentication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true,
      token: "",
      setToken: "",
    };
  }

  changeState() {
    const { isLogginActive } = this.state;
    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }

    this.setState((prevState) => ({
      isLogginActive: !prevState.isLogginActive,
    }));
  }

  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "Login" : "Register";

    const userLogin = (tok) => {
      this.state.token = tok;
      console.log(this.state.token);
    };

    return (
      <div className="App">
        <div className="login">
          <div className="container">
            {isLogginActive && (
              <Login
                userLogin={userLogin}
                containerRef={(ref) => (this.current = ref)}
              />
            )}
            {!isLogginActive && (
              <Register
                userLogin={userLogin}
                containerRef={(ref) => (this.current = ref)}
              />
            )}
          </div>
          <RightSide
            current={current}
            containerRef={(ref) => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const RightSide = (props) => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default Authentication;
