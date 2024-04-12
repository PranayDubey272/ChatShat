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
        idArray.push(user.users[1]);
         
      });
      const lm  = [];
      for (let i = 0; i < idArray.length; i++){
        const userId = idArray[i];
        
        // Use template literal to construct the URL with the current user ID
        const url = `http://localhost:3000/user/${userId}`;

        lm.push("click to chat");
        axios.get(url, config)
    .then((response) => {
      usersArray.push(response.data.name); // Log the response data
      // Process the response data as needed
    })
    .catch((error) => {
      console.error(`Error fetching data for user ID ${userId}:`, error);
      // Handle error if needed
    });
      }
      const formattedConversations = {
        users: usersArray,
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

const convo = conversations.users&&conversations.users.map((user,index)=>({
  user,
  _id: conversations._id[index],
  latestMessage: "click to chat"
}));
console.log(convo);
console.log(convo && convo[0] && convo[0].user);
  return (
    
    <div className="sidebar-container">
    <div className="sb-search" >
        <IconButton>
        <SearchIcon />
        </IconButton>
        <input placeholder="search" className="search-box" />
    </div>
    <div className="sb-conversation" >
      {convo &&convo.map((date, index) => {
        // console.log("current convo : ", conversation);
        // console.log(date && date.user);
        if (date && date.length === 1) {
          return <div key={index}></div>;
        }
        if (index === 0) {
          return null;
        }
        if (date && date.user && date.latestMessage === undefined) {
          console.log("No Latest Message with ", date.user);
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
                    date._id +
                    "&" +
                    date.user[1].name
                  );
                }}
                // dispatch change to refresh so as to update chatArea
              >
                <p className={"con-icon" }>
                  {date.user[0]}
                </p>
                <p className={"con-title" }>
                  {date.user}
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
                    date._id +
                    "&" +
                    date.user
                );
              }}
            >
             <p className="con-icon">
    {date && date.user[0]
    //  date &&  date.users &&  date.users[1] &&  date.users[1].name &&  date.users[1].name[0]
    }
  </p>
  <p className="con-title">
    {  date &&  date.user}
  </p>

    
              <p className="con-lastMessage">
                { date &&  date.latestMessage}
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
