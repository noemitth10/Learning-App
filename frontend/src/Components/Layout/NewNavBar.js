import React, { Component } from "react";
import "../../navbar.css";

class NewNavBar extends Component {
  render() {
    return (
      <navbar>
        <ul class="topnav">        
        <li><a className="nav-title active" href="/">LMeZZ</a></li>
        <li className="right element" ><a href="/login">Belépés</a></li>
        <li className="right element"><a href="/hub">Leckék</a></li>
        <li className="right element" ><a href="/test">Tesztek</a></li>
        <li className="right element"><a href="/aboutus">Rólunk</a></li>
        </ul>
      </navbar>
    );
  }
}
export default NewNavBar;