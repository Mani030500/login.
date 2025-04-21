import React, { useState } from 'react';
import './Sidebar.css';
import { Avatar, IconButton } from '@mui/material';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import ChatListItem from './chatListItem'; // Assuming you create this component
import dummyChats from '../data/dummyChats';

function Sidebar({ onChatSelect }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    // In a real app, you would filter the chat list based on the search term
  };

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h1>CHATS</h1>
        <div className="sidebar__headerRight">
          <IconButton>
          <AddCommentOutlinedIcon/>
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input
            placeholder="Search"
            type="text"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>

      <div className="sidebar__chats">
        {dummyChats.map((chat) => (
          <ChatListItem key={chat.id} chat={chat} onClick={() => onChatSelect(chat.id)} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;