import React, { Component } from "react";

export default class UserProfile extends Component {
  render() {
    if (this.props.user) {
      return <h2>Hi {this.props.user.token}</h2>;
    }
    return <h2>You are not logged in</h2>;
  }
}
