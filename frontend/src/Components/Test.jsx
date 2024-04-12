import React, { useEffect, useState } from 'react';
import axios from 'axios';
const userData = JSON.parse(localStorage.getItem("userData"));
const Test = () => {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${userData.data.token}`,
          },
        };
        
        console.log("here");
        axios.get('http://localhost:3000/chat/', config).then((response) => {
          console.log(response);
        });
        console.log("here");
        // console.log('Data refresh in sidebar', response.data);
        // setConversations(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run once on component mount

  return (
    <div>
      {/* Render conversations or other components based on fetched data */}
    </div>
  );
};

export default Test;