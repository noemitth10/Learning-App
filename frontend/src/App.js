import React, { Component } from "react";
import { Layout, Content } from "react-mdl";
import { Grid, Cell } from "react-mdl";
import "./App.css";

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
        <Layout>
          <NavBar />
          <Content>
            <Grid>
              <Cell col={2}></Cell>
              <Cell col={8}>
                <div className="page-content">
                  <Main />
                </div>
              </Cell>
              <Cell col={2}></Cell>
            </Grid>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
