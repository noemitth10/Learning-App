import React from "react"
import error from "../styles/images/404-error.jpg";

const NotFoundPage = () => {
    return (
        <>
        <div className="title-container">
                <h1>404 Hiba</h1>
            </div>
            <img
                        src={error}
                        alt="404 - Hiba"
                        style={{width: "50%"}}
                    />
        </>
        
    )
}
export default NotFoundPage;