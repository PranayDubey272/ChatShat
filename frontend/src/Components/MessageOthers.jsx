import React from 'react'
import { useDispatch, useSelector } from "react-redux";

function MessageOthers({props}) {
  const dispatch = useDispatch();
  return (
    <div className="other-message-container"  >
      <div className="conversation-container"  >
        <p className="con-icon"  >
          {props.sender.name[0]}
        </p>
        <div className="other-text-content"  >
          <p className="con-title"  >
            {props.sender.name}
          </p>
          <p className="con-lastMessage"  >
            {props.content}
          </p>
          {/* <p className="self-timeStamp">12:00am</p> */}
        </div>
      </div>
    </div>
  );
}

export default MessageOthers