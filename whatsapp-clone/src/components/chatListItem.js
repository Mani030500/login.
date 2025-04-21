import React from 'react';
import './chatListItem.css';
import { Avatar } from '@mui/material';

function ChatListItem({ chat, onClick }) {
  return (
    <div className="chatListItem" onClick={onClick}>
      <Avatar src={`https://avatars.dicebear.com/api/human/${chat.name}.svg`} />
      <div className="chatListItem__info">
        <h2>{chat.name}</h2>
        <p>{chat.lastMessage}</p>
      </div>
    </div>
  );
}

export default ChatListItem;