import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class AboutUs extends Component {
  render() {
    return (
      <div className="contact-body" style={{ margin: "0 20%" }}>
        <Grid className="contact-grid">
          <Cell col={6} style={{ background: "white" }}>
            <div>
              <img
                src="https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"
                alt="avatar"
                style={{ height: "200px", paddingTop: "4%" }}
              />
              <h2 style={{ paddingTop: "1em" }}>Tóth Noémi Evelin</h2>
              <h4 style={{ color: "grey" }}>Egyetemi hallgató</h4>
              <hr style={{ borderTop: "3px solid #833fb2" }} />
              <h5>Munkahely</h5>
              <p>MTA-PPKE Magyar Nyelvtechnológiai Kutatócsoport</p>
              <p style={{ textAlign: "justify", padding: "0 2%" }}>
                Az Eszterházy Károly Egyetem Informatika Karának
                Számítástudományi Tanszékén programtervező informatikus
                alapképzésen résztvevő, végzős hallgató. Az MTA-PPKE Magyar
                nyelvtechnológiai Kutatócsoport gyakornoka. Kutatási területei:
                magyar nyelvtani szabályok, egyszerű és összetett mondatok
                felépítésének elemzése nyelvtechnológiai eszközökkel.
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

              <h4 style={{ color: "grey" }}>Szakdolgozati konzulens</h4>
              <hr style={{ borderTop: "3px solid #833fb2" }} />
              <h5>Munkahely</h5>
              <p>MTA-PPKE Magyar Nyelvtechnológiai Kutatócsoport</p>
              <p style={{ textAlign: "justify", padding: "0 2%" }}>
                Adjunktus (Eszterházy Károly Egyetem), tudományos munkatárs
                (MTA-PPKE Nyelvtechnológiai Kutatócsoport). A Pázmány Péter
                Katolikus Egyetem Információs Technológiai és Bionikai Karán
                szerzett PhD fokozatot humán nyelvtechnológia tudományterületen
                summa cum laude minősítéssel. Kutatási területei: gépi fordítás
                és kiértékelése, összefoglaló generálás, szövegek szemantikai
                kategorizálása, szövegek hibáinak detektálása és helyreállítása.{" "}
              </p>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default AboutUs;
