<div className="sidebar-container">
<div className="sb-search" >
    <IconButton>
    <SearchIcon />
    </IconButton>
    <input placeholder="search" className="search-box" />
</div>
<div className="sb-conversation" >
  {conversations.map((conversation, index) => {
    // console.log("current convo : ", conversation);
    if (conversation.users.length === 1) {
      return <div key={index}></div>;
    }
    if (conversation.latestMessage === undefined) {
      console.log("No Latest Message with ", conversation.users[1]);
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
              console.log(users[1]);

              navigate(
                "chat/" +
                  conversation._id +
                  "&" +
                  conversation.users[1].name
              );
            }}
            // dispatch change to refresh so as to update chatArea
          >
            <p className={"con-icon" }>
              {conversation.users[1].name[0]}
            </p>
            <p className={"con-title" }>
              {conversation.users[1].name}
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
              "chat/" +
                conversation._id +
                "&" +
                conversation.users[1].name
            );
          }}
        >
          <p className={"con-icon" }>
            {conversation.users[1].name[0]}
          </p>
          <p className={"con-title" }>
            {conversation.users[1].name}
          </p>

          <p className="con-lastMessage">
            {conversation.latestMessage.content}
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