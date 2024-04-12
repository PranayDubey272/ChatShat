import React from "react";
import {IconButton} from "@mui/material";
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { useSelector } from "react-redux";

function CreateGroups(){

    const lightTheme = useSelector((state) => state.themeKey);

    return (
        <div className={"creategroup-container" + (lightTheme ? "" : " dark")}>
            <input type="text" placeholder="Enter Group Name" className={"search-box" + (lightTheme ? "" : " dark")} />
            <IconButton>
                <DoneOutlineIcon />
            </IconButton>
        </div>);
}

export default CreateGroups
