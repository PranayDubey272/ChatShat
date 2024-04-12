import React from 'react'
import { useSelector } from 'react-redux';

function MessageSelf() {

  const lightTheme = useSelector((state) => state.themeKey);

  var props2={name:"You",message:"This is me"}
  return (
    <div className={'self-message-container' + (lightTheme ? "" : " dark")}>
      <div className={"messageBox" + (lightTheme ? "" : " dark")}>
      <p>{props2.message}</p>
      <p className={'self-timeStamp' + (lightTheme ? "" : " dark")}>12:00am</p>
      </div>
    </div>
  )
}

export default MessageSelf