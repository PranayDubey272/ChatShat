import React from "react";
import {IconButton} from "@mui/material";
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

function CreateGroups(){
    return (<div className="creategroup-container">
            <input type="text" placeholder="Enter Group Name"
            className="search-box" />
            <IconButton>
                <DoneOutlineIcon />
            </IconButton>
        </div>);
}

export default CreateGroups