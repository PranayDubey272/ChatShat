import React, { useContext, useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";
import Navigation from "./Navigation";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { refreshSidebarFun } from "../features/refreshSidebar";
import { myContext } from "./MainContainer";

function Sidebar({data}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("here");
  const { refresh, setRefresh } = useContext(myContext);
  // const refresh = useSelector((state) => state.refreshKey);
  console.log("Context API : refresh : ", refresh);
  const [conversations, setConversations] = useState([]);
  // console.log("Conversations of Sidebar : ", conversations);
  const userData = JSON.parse(localStorage.getItem("userData"));
  // console.log("Data from LocalStorage : ", userData);
  const nav = useNavigate();
  if (!userData) {
    console.log("User not Authenticated");
    nav("/");
  }
  var users;
  useEffect(() => {
    // console.log("Sidebar : ", user.token);
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    
    axios.get("http://localhost:3000/chat/fetchChats", config).then((response) => {
      console.log("Data refresh in sidebar ");
      // users = response;
      console.log(response);
     
      
      const usersArray = [];
      const idArray = [];


        response.data.forEach((user) => {
        // usersArray.push(user);
        idArray.push(user._id);
      });
      const lm  = [];
      for (let i = 0; i < usersArray.length; i++){
        lm.push("click to chat");
      }
      const formattedConversations = {
        users: idArray,
        latestMessage: lm,
        _id: idArray, // Assuming conversation ID is needed
      }

      setConversations(formattedConversations);
      console.log(formattedConversations);
      // setRefresh(!refresh);
    }).catch((error) => {
      console.error("Error fetching chats:", error);
    });
  }, [refresh]);
  
  const user = userData.data;

  
  if(users){
    console.log(users.users[0]);
  }
  useEffect(() => {
    // Update conversations state when data prop changes
    if (data) {
      console.log(data);
      const formattedConversations = {
        users: data.users,
        latestMessage: data.latestMessage,
        _id: data._id, // Assuming conversation ID is needed
      }
      setConversations(formattedConversations);
      console.log("here2");
      console.log(formattedConversations);
    }
  }, [data]); // Re-run effect when data prop changes
console.log(conversations);
  return (
    
    <div className="sidebar-container">
    <div className="sb-search" >
        <IconButton>
        <SearchIcon />
        </IconButton>
        <input placeholder="search" className="search-box" />
    </div>
    <div className="sb-conversation" >
      {data &&data.users.map((date, index) => {
        // console.log("current convo : ", conversation);
        if (date && date.length === 1) {
          return <div key={index}></div>;
        }
        if (index === 0) {
          return null;
        }
        if (data && data.users && data.latestMessage === undefined) {
          console.log("No Latest Message with ", data.users[1].name);
          return (
            <div
              key={index}
              onClick={() => {
                console.log("Refresh fired from sidebar");
                dispatch(refreshSidebarFun());
                setRefresh(!refresh);
              }}
            >
              <div
                key={index}
                className="conversation-container"
                onClick={() => {
                  navigate(
                    "/app/chat/" +
                    data._id +
                    "&" +
                    data.users[1].name
                  );
                }}
                // dispatch change to refresh so as to update chatArea
              >
                <p className={"con-icon" }>
                  {date.name[0]}
                </p>
                <p className={"con-title" }>
                  {date.name}
                </p>
    
                <p className="con-lastMessage">
                  No previous Messages, click here to start a new chat
                </p>
                {/* <p className={"con-timeStamp" }>
              {conversation.timeStamp}
            </p> */}
              </div>
            </div>
          );
        } else {
          return (
            <div
              key={index}
              className="conversation-container"
              onClick={() => {
                navigate(
                  "/app/chat/" +
                    data._id +
                    "&" +
                    data.users[1].name
                );
              }}
            >
             <p className="con-icon">
    {console.log(data && data.users && data.users[1] && data.users[1].name && data.users[1].name[0])
    // data && data.users && data.users[1] && data.users[1].name && data.users[1].name[0]
    }
  </p>
  <p className="con-title">
    { data.users[1].name}
  </p>

    
              <p className="con-lastMessage">
                {data.latestMessage.content}
              </p>
              {/* <p className={"con-timeStamp" }>
              {conversation.timeStamp}
            </p> */}
            </div>
          );
        }
      })
      }
    </div>
    <div className="sb-navigation">
      <Navigation/>
    </div>
    </div>
  );
}

export default Sidebar;