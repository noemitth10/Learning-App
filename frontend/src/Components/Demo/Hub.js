import React, { Component } from "react";

import "../../hub-content.css";

const Hub = () => {
  return (
    <div className="lesson-container">
      <h2 className="title-container">Mondat elemzés a magyar nyelvtanban</h2>
      <div>
        <p>Egyszerű és összetett mondatok</p>
        <p>Mondatfajták</p>
        <a href="/lesson">
          <p>Az alany és az állítmány</p>
        </a>
        <p>Tárgy elemzése a mondatban</p>
      </div>
    </div>
  );
};
export default Hub;
