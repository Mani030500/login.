import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Chat from './components/chat';
import './App.css';

function App() {
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar onChatSelect={setSelectedChat} />
        <Chat chatId={selectedChat} />
      </div>
    </div>
  );
}

export default App;