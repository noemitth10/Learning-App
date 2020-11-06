import React, { Component } from "react";

import "../../hub-content.css";
import path from "./path.png";

const Hub = () => {
  return (
    <div className="lesson-container">
      <h2 className="title-container">Mondatelemzés a magyar nyelvtanban</h2>
      <div className="path-container">
        <img src={path} width="100%"/>
        <div class="text-block-1">
          <p>Egyszerű és összetett mondatok</p>
        </div>
        <div class="text-block-2">
            <a href="/lesson">
              <p>Az alany és az állítmány</p>
            </a>
        </div>
      </div>
    </div>
  );
};
export default Hub;
