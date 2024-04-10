import React from 'react';
import './myStyles.css';
import { useState } from 'react';
import { IconButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import MessageOthers from './MessageOthers';
import MessageSelf from './MessageSelf';
import { useSelector } from 'react-redux';
import { Add as AddIcon } from '@mui/icons-material';
function ChatArea() {
  const [message, setMessage] = useState('');

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendClick = () => {
    if (message.trim() !== '') {
      onSend(message);
      setMessage('');
    }
  };

  const handleFileInputChange = (e) => {
    const files = e.target.files;
   
    console.log('Selected files:', files);
  };
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
  var props=conversations[0];
  return (
    <div className={'chatArea-container' + (lightTheme ? "" : " dark")}>
      <div className={"chatArea-header" + (lightTheme ? "" : " dark")}>
        <p className={"con-icon" + (lightTheme ? "" : " dark")}>{props.name[0]}</p>
        <div className={"header-text" + (lightTheme ? "" : " dark")}>
          <p className={'con-title' + (lightTheme ? "" : " dark")}>{props.name}</p>
          <p className={'con-timeStamp' + (lightTheme ? "" : " dark")}>{props.timeStamp}</p>
        </div>
        <div style={{ marginLeft: 'auto' }}>
        <IconButton>
          <CloseIcon className='close'/>
        </IconButton></div>
      </div>
      <div className={"messages-container" + (lightTheme ? "" : " dark")}>
        <MessageOthers/>
        <MessageSelf/>
      </div>
      <div className={"text-input-area" + (lightTheme ? "" : " dark")}>
      <IconButton color="primary" component="label" htmlFor="fileInput">
        <AddIcon />
        <input
          type="file"
          id="fileInput"
          style={{ display: 'none' }}
          onChange={handleFileInputChange}
          multiple
        />
      </IconButton>        
      <input placeholder='Type a Message' className={'search-box' + (lightTheme ? "" : " dark")}/>
      <SendIcon/>
</div>
    </div>
  );
}

export default ChatArea;
