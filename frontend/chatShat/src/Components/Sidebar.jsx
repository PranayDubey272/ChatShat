import React, { useState } from 'react'
import Navigation from "./Navigation";
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import ChatArea from './ChatArea';
import ConversationItem from './ConversationItem';
import "./myStyles.css";

function Sidebar() {
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
    <div className='sidebar-container'>
      
      <div className="sb-search">
        <IconButton>
        <SearchIcon/>
        </IconButton>
        <input placeholder='search' className='search-box'/>
      </div>
      <div className="sb-conversation">
        {
          conversations.map((conversation)=>{
            return <ConversationItem props={conversation} key={conversation.name}/>
            
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