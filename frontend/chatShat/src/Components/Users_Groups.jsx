import React from "react";
import "./myStyle.css";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import logo from "../images/logo.png";

function Users_Groups(){
    return (
    <div className="list-container">
        <div className="ug-header">
            <img src={logo} alt="logo" style={{height: "3rem",
            width: "5rem", marginLeft: "10px"}}/>
            <p className="ug-title">Online Users</p>
        </div>
        <div className="sb-search">
            <IconButton>
                <SearchIcon/>
            </IconButton>
            <input type="text" placeholder="Search" />
        </div>

        <div className="ug-list">

            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test User</p>
            </div>
            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test User</p>
            </div>
            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test User</p>
            </div>
            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test User</p>
            </div>
            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test User</p>
            </div>
            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test User</p>
            </div>
            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test User</p>
            </div>
            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test User</p>
            </div>
            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test User</p>
            </div>
            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test User</p>
            </div>
            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test User</p>
            </div>
            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test User</p>
            </div>
            <div className="list-item">
                <p className="con-icon">T</p>
                <p className="con-title">Test User</p>
            </div>
        </div>
        
    </div>
    );
}

export default Users_Groups;