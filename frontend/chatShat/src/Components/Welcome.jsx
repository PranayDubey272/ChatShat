import React from "react";
import logo from "/logo.png";

function Welcome(){
    return (
    <div className="welcome-container">
        <img src={logo} alt="Logo" className="welcome-logo" />
        <p>Come and chat with us HABIBI</p>
        
    </div>);
}

export default Welcome;