import React, { Component } from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { Grid, Cell } from "react-mdl";
import "../landingpage.css";

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-container">
        <Jumbotron fluid className="jumbotron-main">
          <h1>A tanulás még sosem volt ilyen egyszerű!</h1>
          <div class="container-fluid main">
            <div class="text-center main-text">
              <p>
                Tanuld a magyar nyelvtan szabályait az otthonod kényelméből.
              </p>

              <div class="c2a-btn footer-c2a-btn">
                <div
                  class="btn-group btn-group-lg"
                  role="group"
                  aria-label="Call to action"
                >
                  <a type="button" class="btn btn-default btn-lg" href="/login">
                    Lépj be
                  </a>
                  <span class="btn-circle btn-or">or</span>
                  <a
                    type="button"
                    class="btn btn-default btn-lg"
                    href="/register"
                  >
                    Regisztrálj
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Jumbotron>
        <div className="text-container">
          <h3>Mit csinálunk pontosan?</h3>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </div>
        <div className="choose-container">
          <div className="left">
            <i class="far fa-clock"></i>
            <h5>
              <svg
                width="2em"
                height="2em"
                viewBox="0 0 16 16"
                class="bi bi-alarm"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"
                />
              </svg>
              Gyors fejlődés
            </h5>
            <hr style={{ borderTop: "3px solid #009bd4" }} />
            <p>
              Már napi 20 perc gyakorlással is nagyszerűen ki tudod egészíteni
              azt a tudást amit az iskolában kapsz.
            </p>
          </div>
          <div className="center">
            <h5>
              <svg
                width="2em"
                height="2em"
                viewBox="0 0 16 16"
                class="bi bi-bag-check"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1a2.5 2.5 0 0 0-2.5 2.5V4h5v-.5A2.5 2.5 0 0 0 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5H2z"
                />
                <path
                  fill-rule="evenodd"
                  d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                />
              </svg>
              Személyre szabottság
            </h5>
            <hr style={{ borderTop: "3px solid #00d4d0" }} />
            <p>
              A leckék teljesítéséért különböző jutalmakban részesülhetsz, az
              eredményeid pedig személyes profilodon követheted nyomon.
            </p>
          </div>
          <div className="right">
            <h5>
              <svg
                width="2em"
                height="2em"
                viewBox="0 0 16 16"
                class="bi bi-house"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                />
                <path
                  fill-rule="evenodd"
                  d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                />
              </svg>
              Tanulj akárhonnan
            </h5>
            <hr style={{ borderTop: "3px solid #00d49b" }} />
            <p>
              Tanulhatsz az iskolában, otthon, mobilról, tabletről vagy
              laptopról, az élmény garantált.
            </p>
          </div>
        </div>

        <Jumbotron fluid className="jumbotron-second">
          <div class="container-fluid main">
            <div class="text-center main-text">
              <h2>Szóval mire vársz még?</h2>
              <a class="btn btn-primary btn-lg" href="hub" role="button">
                Kezdd el most!
              </a>
            </div>
          </div>
        </Jumbotron>

        <div className="text-container-black">
          <h3>Mit csinálunk pontosan?</h3>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </div>

        <div className="messages-box">
          <div className="message">
            <h6>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-chat-dots"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"
                />
                <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
              mary.js
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-x-square"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="x-svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                />
                <path
                  fill-rule="evenodd"
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </h6>
            <p>
              Nagyon elégedett vagyok az alkalmazással. Rengeteget segített hogy
              ne veszítsem el a motivációm a tanulásban! :))
            </p>
          </div>
        </div>
        <footer class="footer">Copyright © Your Website</footer>
      </div>
    );
  }
}
export default LandingPage;
