import React from 'react';
import './myStyles.css';
import { IconButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import MessageOthers from './MessageOthers';
import MessageSelf from './MessageSelf';
function ChatArea({props}) {
  return (
    <div className='chatArea-container'>
      <div className="chatArea-header">
        <p className="con-icon">{props.name[0]}</p>
        <div className="header-text">
          <p className='con-title'>{props.name}</p>
          <p className='con-timeStamp'>{props.timeStamp}</p>
        </div>
        <div style={{ marginLeft: 'auto' }}>
        <IconButton>
          <CloseIcon className='close'/>
        </IconButton></div>
      </div>
      <div className="messages-container">
        <MessageOthers/>
        <MessageSelf/>
      </div>
      <div className="text-input-area">        
      <input placeholder='Type a Message' className='search-box'/>
      <SendIcon/>
</div>
    </div>
  );
}

export default ChatArea;
