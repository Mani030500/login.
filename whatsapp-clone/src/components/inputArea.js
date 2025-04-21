import React, { useState } from 'react';
import './inputArea.css';
import { IconButton } from '@mui/material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFile from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';

function InputArea({ sendMessage }) {
  const [input, setInput] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSendMessage = (event) => {
    event.preventDefault();
    sendMessage(input);
    setInput('');
  };

  return (
    <div className="chat__footer">
      <IconButton>
        <InsertEmoticonIcon />
      </IconButton>
      <IconButton>
        <AttachFile />
      </IconButton>
      <form>
        <input
          placeholder="Type a message"
          type="text"
          value={input}
          onChange={handleInputChange}
        />
        <button onClick={handleSendMessage} type="submit">
          <SendIcon />
        </button>
      </form>
    </div>
  );
}

export default InputArea;