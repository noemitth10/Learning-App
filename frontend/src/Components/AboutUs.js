import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class AboutUs extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6} style={{ background: "white" }}>
            <div>
              <img
                src="https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"
                alt="avatar"
                style={{ height: "200px", paddingTop: "4%" }}
              />
              <h2 style={{ paddingTop: "1em" }}>Tóth Noémi Evelin</h2>
              <h4 style={{ color: "grey" }}>Computer Science Student</h4>
              <hr style={{ borderTop: "3px solid #833fb2" }} />
              <h5>Munkahely</h5>
              <p>MTA-PPKE Magyar Nyelvtechnológiai Kutatócsoport</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged
              </p>
            </div>
          </Cell>
          <Cell col={6} style={{ background: "white" }}>
            <div>
              <img
                src="https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"
                alt="avatar"
                style={{ height: "200px", paddingTop: "4%" }}
              />
              <h2 style={{ paddingTop: "1em" }}>Dr. Yang Zijian Győző</h2>

              <h4 style={{ color: "grey" }}>Programmer</h4>
              <hr style={{ borderTop: "3px solid #833fb2" }} />
              <h5>Munkahely</h5>
              <p>MTA-PPKE Magyar Nyelvtechnológiai Kutatócsoport</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged
              </p>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default AboutUs;
