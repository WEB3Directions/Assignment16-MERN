// Chat.js
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { sendMessage, setMessages } from './store/chatSlice';
import { database, ref, onValue, off } from '../index';



const Chat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.user_chat.messages);

  const [newMessage, setNewMessage] = useState('');

  
  const db = ref(database, 'messages');

  
  useEffect(() => {
    const handleSnapshot = (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const messagesArray = Object.values(data);
        dispatch(setMessages(messagesArray));
      }
    };

    const unsubscribe = onValue(db, handleSnapshot);

    return () => {
      
      off(unsubscribe);
    };
  }, [db, dispatch]);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const messageObject = {
        text: newMessage,
        timestamp: Date.now(),
      };

     
      db.push(messageObject);

      dispatch(sendMessage(newMessage));
      setNewMessage('');
    }
  };

  return (
    <div>
      <div>
        {Array.isArray(messages) ? (
          messages.map((message, index) => (
            <div key={index}>{message?.someProperty}</div> 
          ))
        ) : (
          <div>No messages yet.</div>
        )}
      </div>
      <div>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
      <div>
        <Link to="/">Go to Home</Link>
      </div>
    </div>
  );
};

export default Chat;
