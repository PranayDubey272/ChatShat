import React from "react";
import "./myStyles.css";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import lightLogo from "/logo.png";
import darkLogo from "/logow.png";
import { useSelector } from "react-redux";

function Groups(){
    const lightTheme = useSelector((state) => state.themeKey);

    return (
    <div className={"list-container" + (lightTheme ? "" : " dark")}>
        <div className={"ug-header" + (lightTheme ? "" : " dark")}>
            <img src={lightTheme ? lightLogo : darkLogo} alt="logo" style={{height: "3rem",
            width: "5rem", marginLeft: "10px"}}/>
            <p className={"ug-title" + (lightTheme ? "" : " dark")}>Available Groups</p>
        </div>
        <div className={"sb-search" + (lightTheme ? "" : " dark")}>
            <IconButton>
                <SearchIcon/>
            </IconButton>
            <input type="text" placeholder="Search" className={"search-box" + (lightTheme ? "" : " dark")} />
        </div>

        <div className="ug-list">

            <div className={"list-item" + (lightTheme ? "" : " dark")}>
                <p className={"con-icon" + (lightTheme ? "" : " dark")}>T</p>
                <p className={"con-title" + (lightTheme ? "" : " dark")}>Test User</p>
            </div>
            <div className={"list-item" + (lightTheme ? "" : " dark")}>
                <p className={"con-icon" + (lightTheme ? "" : " dark")}>T</p>
                <p className={"con-title" + (lightTheme ? "" : " dark")}>Test User</p>
            </div><div className={"list-item" + (lightTheme ? "" : " dark")}>
                <p className={"con-icon" + (lightTheme ? "" : " dark")}>T</p>
                <p className={"con-title" + (lightTheme ? "" : " dark")}>Test User</p>
            </div><div className={"list-item" + (lightTheme ? "" : " dark")}>
                <p className={"con-icon" + (lightTheme ? "" : " dark")}>T</p>
                <p className={"con-title" + (lightTheme ? "" : " dark")}>Test User</p>
            </div><div className={"list-item" + (lightTheme ? "" : " dark")}>
                <p className={"con-icon" + (lightTheme ? "" : " dark")}>T</p>
                <p className={"con-title" + (lightTheme ? "" : " dark")}>Test User</p>
            </div><div className={"list-item" + (lightTheme ? "" : " dark")}>
                <p className={"con-icon" + (lightTheme ? "" : " dark")}>T</p>
                <p className={"con-title" + (lightTheme ? "" : " dark")}>Test User</p>
            </div><div className={"list-item" + (lightTheme ? "" : " dark")}>
                <p className={"con-icon" + (lightTheme ? "" : " dark")}>T</p>
                <p className={"con-title" + (lightTheme ? "" : " dark")}>Test User</p>
            </div><div className={"list-item" + (lightTheme ? "" : " dark")}>
                <p className={"con-icon" + (lightTheme ? "" : " dark")}>T</p>
                <p className={"con-title" + (lightTheme ? "" : " dark")}>Test User</p>
            </div><div className={"list-item" + (lightTheme ? "" : " dark")}>
                <p className={"con-icon" + (lightTheme ? "" : " dark")}>T</p>
                <p className={"con-title" + (lightTheme ? "" : " dark")}>Test User</p>
            </div><div className={"list-item" + (lightTheme ? "" : " dark")}>
                <p className={"con-icon" + (lightTheme ? "" : " dark")}>T</p>
                <p className={"con-title" + (lightTheme ? "" : " dark")}>Test User</p>
            </div><div className={"list-item" + (lightTheme ? "" : " dark")}>
                <p className={"con-icon" + (lightTheme ? "" : " dark")}>T</p>
                <p className={"con-title" + (lightTheme ? "" : " dark")}>Test User</p>
            </div><div className={"list-item" + (lightTheme ? "" : " dark")}>
                <p className={"con-icon" + (lightTheme ? "" : " dark")}>T</p>
                <p className={"con-title" + (lightTheme ? "" : " dark")}>Test User</p>
            </div><div className={"list-item" + (lightTheme ? "" : " dark")}>
                <p className={"con-icon" + (lightTheme ? "" : " dark")}>T</p>
                <p className={"con-title" + (lightTheme ? "" : " dark")}>Test User</p>
            </div><div className={"list-item" + (lightTheme ? "" : " dark")}>
                <p className={"con-icon" + (lightTheme ? "" : " dark")}>T</p>
                <p className={"con-title" + (lightTheme ? "" : " dark")}>Test User</p>
            </div><div className={"list-item" + (lightTheme ? "" : " dark")}>
                <p className={"con-icon" + (lightTheme ? "" : " dark")}>T</p>
                <p className={"con-title" + (lightTheme ? "" : " dark")}>Test User</p>
            </div><div className={"list-item" + (lightTheme ? "" : " dark")}>
                <p className={"con-icon" + (lightTheme ? "" : " dark")}>T</p>
                <p className={"con-title" + (lightTheme ? "" : " dark")}>Test User</p>
            </div><div className={"list-item" + (lightTheme ? "" : " dark")}>
                <p className={"con-icon" + (lightTheme ? "" : " dark")}>T</p>
                <p className={"con-title" + (lightTheme ? "" : " dark")}>Test User</p>
            </div>
        </div>
        
    </div>
    );
}

export default Groups;