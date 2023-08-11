import React from "react";
import "./Error.css";

const Error = (props) => {

    return <div className="errorPage">
        <h1 className="errorTitle">404</h1>
        <p className="errorText">Oups! La page que vous demandez n'existe pas.</p>
    </div>

}

export default Error