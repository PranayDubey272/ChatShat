import React,{useState} from "react";
import './myStyles.css';
import Sidebar from "./Sidebar";
import ChatArea from "./ChatArea";
import Users_Group from "./Users";
import Welcome from "./Welcome";
import CreateGroup from "./CreateGroups"
import {Outlet} from "react-router-dom";
import { useSelector } from "react-redux";
function MainContainer(){

    const lightTheme = useSelector((state) => state.themeKey);

 return (
 <div className="main-container">
 <div className="header">
  <div className="innerheader">
  <img src="/logow.png" alt="chat-icon" className="head-img"/>
  </div>
 </div>
 <div className={"mainwork-container" + (lightTheme ? "" : " dark")}>
 <Sidebar/>
 <Outlet/>
 {/* <CreateGroup/> */}
 {/* <Welcome/> */}
 {/* <Users_Group/> */}
 {/* <ChatArea props={conversations[0]}/> */}
  
 </div>
 
 </div>);
}
export default MainContainer;