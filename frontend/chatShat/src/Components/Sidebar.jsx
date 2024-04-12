 import React, { useState } from 'react'
import Navigation from "./Navigation";
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import ChatArea from './ChatArea';
import ConversationItem from './ConversationItem';
import "./myStyles.css";
import { useSelector } from 'react-redux';
import { dark } from '@mui/material/styles/createPalette';
// import { useNavigate } from 'react-router-dom';

function Sidebar() {

  const lightTheme = useSelector((state) => state.themeKey);

  const [conversations,setConversation]=useState([
    {
      name:"Test#1",
      lastMessage:"Last Message #1",
      timeStamp:"today",
    },
    {
      name:"Test#2",
      lastMessage:"Last Message #2",
      timeStamp:"today",
    },
    {
      name:"Test#3",
      lastMessage:"Last Message #3",
      timeStamp:"today",
    },
  ]);
  return (
    <div className={"sidebar-container" + (lightTheme ? "" : " totalDark")}>
      
      <div className={"sb-search" + (lightTheme ? "" : " dark")}>
        <IconButton className={"" + (lightTheme ? "" : "dark")}>
        <SearchIcon/>
        </IconButton>
        <input placeholder='search' className={'search-box' + (lightTheme ? "" : " dark")}/>
      </div>
      <div className={"sb-conversation" + (lightTheme ? "" : " midDark")}>
        {
          conversations.map((conversation)=>{
            return <ConversationItem props={conversation} key={conversation.name} />
            
          })
        }
      
      </div> 
      
      <div className="sb-navigation">
      <Navigation/> 

      </div>
    </div>
  )
}

export default Sidebar