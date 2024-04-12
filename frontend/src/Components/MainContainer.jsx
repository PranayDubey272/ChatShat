import React,{createContext,useState} from "react";
import './myStyles.css';
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import {Outlet} from "react-router-dom";
export const myContext = createContext();

function MainContainer(){
  const dispatch = useDispatch();
  const [refresh, setRefresh] = useState(true);
 return (
 <div className="main-container">
 <div className="header">
  <div className="innerheader">
  <img src="/logow.png" alt="chat-icon" className="head-img"/>
  </div>
 </div>
 <div className="mainwork-container">
 <myContext.Provider value={{ refresh: refresh, setRefresh: setRefresh }}>
        {/* <Sidebar /> */}
        <Outlet />
</myContext.Provider>
 </div>
 
 </div>
 )};
export default MainContainer;