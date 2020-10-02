import React, { Component } from "react";
import { Layout, Content } from "react-mdl";
import { Grid, Cell } from "react-mdl";
import "./App.css";
import Board from "./Components/Demo_test/Board";

import Main from "./Components/Main";
import NavBar from "./Components/Layout/NavBar";

class App extends Component {
  render() {
    const navDropDownTitle = (
      <i
        class="fa fa-user-o"
        aria-hidden="true"
        style={{ fontSize: "30px" }}
      ></i>
    );

    return (
      <div className="demo-big-content" style={{ display: "grid" }}>
        <Board>
          <Layout>
            <NavBar />
            <Content>
              <Main />
            </Content>
          </Layout>
        </Board>
      </div>
    );
  }
}

export default App;
