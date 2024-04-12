import React from "react";
import lightLogo from "/logo.png";
import darkLogo from "/logow.png";
import { useSelector } from "react-redux";

function Welcome(){

    const lightTheme = useSelector((state) => state.themeKey);

    return (
    <div className={"welcome-container" + (lightTheme ? "" : " dark")}>
        <img src={lightTheme ? lightLogo : darkLogo} alt="Logo" className={"welcome-logo" + (lightTheme ? "" : " dark")} />
        <p>Come and chat with us HABIBI</p>
        
    </div>);
}

export default Welcome;