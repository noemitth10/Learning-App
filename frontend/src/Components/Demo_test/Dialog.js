import React, { Component } from "react";

class Dialog extends Component {
  render() {
    return (
      <div>
        <button>X</button>
        {this.props.children}
      </div>
    );
  }
}
export default Dialog;
