import React, { Component } from "react";
import {
  Footer,
  FooterSection,
  FooterDropDownSection,
  FooterLinkList,
} from "react-mdl";

class App extends Component {
  render() {
    return (
      /*<Footer size="mini" className="footer">
        <FooterSection type="left" logo="Title">
          <FooterLinkList>
            <a href="#">Help</a>
            <a href="#">Privacy & Terms</a>
          </FooterLinkList>
        </FooterSection>
      </Footer>*/
      /*<footer>
        <div className="main-content">
          <div className="left box">
            <h2>About US</h2>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
              <div className="social">
                <a href="#">
                  <span className="fab fa-facebook-f"></span>
                  <span className="fab fa-twitter"></span>
                  <span className="fab fa-instagram"></span>
                  <span className="fab fa-youtube"></span>
                </a>
              </div>
            </div>
          </div>
          <div className="center box">
            <h2>Address</h2>
            <div className="content">
              <div className="place">
                <span className="fas fa-map-marker-alt"></span>
                <span className="text">Eger, Magyarország</span>
              </div>
              <div className="phone">
                <span className="fas fa-map-marker-alt"></span>
                <span className="text">+36012345678</span>
              </div>
              <div className="email">
                <span className="fas fa-envelope"></span>
                <span className="text">learningapp@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="right box">
            <h2>Contact Us</h2>
            <form action="#">
              <div className="email">
                <div className="text">Email *</div>
                <input type="email" required></input>
              </div>
              <div className="msg">
                <div className="text">Message *</div>
                <textarea rows="2" cols="25" required></textarea>
              </div>
              <div className="button">
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </footer>*/
      <footer>
        <p>© 2020 Learning App. All rights reserved.</p>
      </footer>
    );
  }
}

export default App;
