import React from "react";
import logo from "/logo.png";
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
                    id="standard-basic" 
                    label="Enter Email Address" 
                    variant="outlined" 
                />
                <TextField 
                    id="outlined-password-input" 
                    label="Password" 
                    type="password"
                    autoComplete="current-password" 
                    variant="outlined" 
                />
                <Button variant="outlined">Sign Up</Button>
                <p className="to-log">Already have an account?<a href="/" className="link-log">Log in</a></p>
            </div>
        </div>    
        );
        
}

export default Login