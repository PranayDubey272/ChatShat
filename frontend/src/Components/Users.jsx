import React, { useContext, useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { myContext } from "./MainContainer";
import { refreshSidebarFun } from "../features/refreshSidebar";
import logo from "/logo.png"; // Update the path to your logo file
import Sidebar from "./Sidebar";

function Users() {
  const { refresh, setRefresh } = useContext(myContext);
  const [users, setUsers] = useState([]);
  const [data, setData] = useState(null); // State to hold the response data
  const userData = JSON.parse(localStorage.getItem("userData"));
  const nav = useNavigate();
  const dispatch = useDispatch();

  if (!userData) {
    console.log("User not Authenticated");
    nav(-1);
  }

  useEffect(() => {
    fetchData();
  }, [refresh]);

  const fetchData = () => {
    const config = {
      headers: {
        Authorization: `Bearer ${userData.data.token}`,
      },
    };
    axios.get("http://localhost:3000/user/fetchUsers", config)
      .then((response) => {
        console.log("User data refreshed in Users panel");
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };

  const handleListItemClick = (user) => {
    console.log("Creating chat with ", user.name);
    const config = {
      headers: {
        Authorization: `Bearer ${userData.data.token}`,
      },
    };
    axios.post("http://localhost:3000/chat/", { userId: user._id }, config)
      .then((response) => {
        console.log("heree");
        console.log("Response from chat creation:", response.data);
        const fetchedConversations = response.data;
        setData(fetchedConversations); // Store the response data in state
        dispatch(refreshSidebarFun());
      })
      .catch((error) => {
        console.error("Error creating chat:", error);
      });
    };
    
    return (
      <AnimatePresence>
      <Sidebar data = {data}/>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: "0.3" }}
        className="list-container"
      >
        <div className="ug-header">
          <img
            src={logo}
            style={{ height: "2rem", width: "2rem", marginLeft: "10px" }}
          />
          <p className={"ug-title"}>Available Users</p>
          <IconButton
            className={"icon"}
            onClick={() => {
              setRefresh(!refresh);
            }}
          >
            <RefreshIcon />
          </IconButton>
        </div>
        <div className={"sb-search"}>
          <IconButton className={"icon"}>
            <SearchIcon />
          </IconButton>
          <input placeholder="Search" className={"search-box"} />
        </div>
        <div className="ug-list">
          {users.map((user, index) => (
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className={"list-item"}
              key={index}
              onClick={() => handleListItemClick(user)}
            >
              <p className={"con-icon"}>T</p>
              <p className={"con-title"}>{user.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Users;
