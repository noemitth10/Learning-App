import React, { Fragment, useEffect, useState } from "react";

import "../../styles/Themes.css"

const PracticeList = (props) => { 

    return (
        <>
            <div className="title-container">
                <h1>Gyakorlás</h1>
                <h1>{props.location.state.test}</h1>
            </div>
           
        </>
    )
}
export default PracticeList;