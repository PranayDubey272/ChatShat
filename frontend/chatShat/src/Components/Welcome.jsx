import React from "react";
import logo from "/logo.png";
import { useSelector } from "react-redux";

function Welcome(){

    const lightTheme = useSelector((state) => state.themeKey);

    return (
    <div className={"welcome-container" + (lightTheme ? "" : " dark")}>
        <img src={logo} alt="Logo" className={"welcome-logo" + (lightTheme ? "" : " dark")} />
        <p>Come and chat with us HABIBI</p>
        
    </div>);
}

export default Welcome;