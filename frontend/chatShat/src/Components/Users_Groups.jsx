import React from "react";
import "./myStyle.css";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";

function Users_Groups(){
    return (
    <div className="list-container">
        <div className="ug-header">
            <img src="logo" alt="logo" style={{height: "2rem", width: "2rem"}}/>
            <p className="ug-title">Online Users</p>
        </div>
        <div className="sb-search">
            <IconButton>
                <SearchIcon/>
            </IconButton>
            <input type="text" placeholder="Search" />
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
        <div className="list-item">
            <p className="con-icon">T</p>
            <p className="con-title">Test User</p>
        </div>
        Users and Groups
    </div>
    );
}

export default Users_Groups;