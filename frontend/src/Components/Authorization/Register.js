import React, { Component } from "react";
import axios from "axios";

export default class Register extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: this.userName,
      password: this.password,
    };
    console.log(data);

    axios
      .post("http://localhost:8000/api/user-create/", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>User name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
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

        <button className="btn btn-primary btn-block">Sign Up</button>
      </form>
    );
  }
}
