import React from 'react';
import './message.css';

function Message({ message, isSender }) {
  return (
    <p className={`message ${isSender && 'message__sender'}`}>
      <span className="message__name">{isSender ? 'You' : message.sender}</span>
      {message.text}
      <span className="message__timestamp">{message.timestamp}</span>
    </p>
  );
}

export default Message;