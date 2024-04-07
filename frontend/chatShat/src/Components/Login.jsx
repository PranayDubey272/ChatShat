import React from "react";
import logo from "../images/logo.png";
import { Button, TextField } from "@mui/material";

function Login(){
    return (
        <div className="login-container">
            <div className="image-container">
                <img src={logo} alt="Logo" className="welcome-logo" />
            </div>
            <div className="login-box">
                <p className="login-text">Login to your Account</p>
                <TextField 
                    id="standard-basic" 
                    label="Enter User Name" 
                    variant="outlined" 
                />
                <TextField 
                    id="outlined-password-input" 
                    label="Enter Password" 
                    type="password"
                    autoComplete="current-password" 
                    variant="outlined" 
                />
                <Button variant="outlined">Log In</Button>
            </div>
        </div>    
        );
        
}

export default Login