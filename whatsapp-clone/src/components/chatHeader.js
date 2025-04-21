
import React, { useState, useEffect } from 'react';
import './chatHeader.css'; // Create this CSS file
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import AttachFile from '@mui/icons-material/AttachFile';
import MoreVert from '@mui/icons-material/MoreVert';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

function ChatHeader() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    }, 60000); // Update every minute (60000 milliseconds)

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="chat__header">
      <Avatar src="https://avatars.dicebear.com/api/human/example1.svg" />
      <div className="chat__headerInfo">
        <h3>User Name</h3>
        <p>Last seen at {currentTime}</p>
      </div>
      <div className="chat__headerRight">
        <IconButton>
          <AddIcCallIcon/>
        </IconButton>
        <IconButton>
          <SearchOutlined />
        </IconButton>
        <IconButton>
          <MoreVert />
        </IconButton>
      </div>
    </div>
  );
}

export default ChatHeader;