import React, { useState, useEffect, useRef } from 'react';
import './chat.css';
import ChatHeader from './chatHeader';
import Message from './message';
import InputArea from './inputArea';
import dummyMessages from '../data/dummyChats';
import { useParams } from 'react-router-dom'; // If you were using routing

function Chat({ chatId }) {
  const [messages, setMessages] = useState([]);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    // In a real app, you would fetch messages based on the chatId
    if (chatId) {
      const filteredMessages = dummyMessages.filter(
        (msg) => msg.chatId === chatId
      );
      setMessages(filteredMessages);
    } else {
      setMessages([]); // Clear messages if no chat is selected
    }

    // Scroll to the bottom when messages change
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatId]);

  const sendMessage = (newMessage) => {
    if (chatId && newMessage.trim() !== '') {
      const newMessageObject = {
        id: Date.now(),
        chatId: chatId,
        sender: 'user', // Assuming the current user is the sender
        text: newMessage,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prevMessages) => [...prevMessages, newMessageObject]);
      // In a real app, you would send this message to the backend
    }
  };

  return (
    <div className="chat">
      <ChatHeader chatName={chatId ? `Chat with User ${chatId}` : 'Select a Chat'} /> {/* Dynamic chat name */}

      <div className="chat__body" ref={chatContainerRef}>
        {messages.map((message) => (
          <Message key={message.id} message={message} isSender={message.sender === 'user'} />
        ))}
      </div>

      {chatId && <InputArea sendMessage={sendMessage} />}
    </div>
  );
}

export default Chat;