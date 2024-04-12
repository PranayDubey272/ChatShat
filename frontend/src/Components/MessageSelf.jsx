import React from 'react'

function MessageSelf({props}) {
  // console.log(props);
  return (
    <div className='self-message-container'>
      <div className="messageBox">
      <p>{props}</p>
      {/* <p className='self-timeStamp'>12:00am</p> */}
      </div>
    </div>
  )
}

export default MessageSelf