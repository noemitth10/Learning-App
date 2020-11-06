import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      username: this.userName,
      password: this.password,
    };

    axios
      .post("http://127.0.0.1:8000/auth/", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("staff", res.is_staff);
        console.log("token: " + localStorage.token);
        console.log("staff: " + localStorage.staff);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Login</h3>

        <div className="form-group">
          <label>User name</label>
          <input
            type="text"
            className="form-control"
            placeholder="User name"
            onChange={(e) => (this.userName = e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => (this.password = e.target.value)}
          />
        </div>

        <button className="btn btn-primary btn-block">Login</button>
      </form>
    );
  }
}
