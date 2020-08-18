import React, { Component } from "react";
import loginImg from "../../login.svg";
import "./style.scss";

export class Login extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    credentials: {
      username: "",
      password: "",
    },
  };

  login = (event) => {
    fetch("http://127.0.0.1:8000/auth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.credentials),
    })
      .then((data) => data.json())
      .then((data) => {
        this.props.userLogin(data.token);
      })
      .catch((error) => console.error(error));
  };

  inputChanged = (event) => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({ credentials: cred });
  };

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                value={this.state.credentials.username}
                onChange={this.inputChanged}
                placeholder="username"
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={this.state.credentials.password}
                onChange={this.inputChanged}
                placeholder="password"
              ></input>
            </div>
          </div>
        </div>
        <div className="form-footer">
          <button onClick={this.login} type="button" className="btn">
            Login
          </button>
        </div>
      </div>
    );
  }
}
export default Login;
