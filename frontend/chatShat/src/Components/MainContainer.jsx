import React from "react";
import './myStyle.css';
import './SideBar.jsx'
import SideBar from "./SideBar.jsx";
import WorkArea from "./WorkArea.jsx";
import Welcome from "./Welcome.jsx"
import CreateGroups from "./CreateGroups.jsx"
import Users_Groups from "./Users_Groups.jsx";


function MainContainer(){
    return <div className="main-container">
        {/* <Login/> */}
        <SideBar/>
        {/* <Users_Groups/> */}
        <CreateGroups/>
        {/* <Welcome/> */}
        {/* <WorkArea/> */}
    </div>;
}

export default MainContainer;