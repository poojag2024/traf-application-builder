import React, { useState } from 'react';
import { Container, Row, Col, Input, Button, ListGroup, ListGroupItem } from 'reactstrap';
import Header from "components/Headers/Header.js";
import ChatBox from "../../components/Chat/ChatBox";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'User' }]);
      // Simulating a response from the chatbot
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "I'm a chatbot response.", sender: 'Chatbot' },
      ]);
      setInput('');
    }
  };

  return (
    <>
    <Header />
    <Container className="mt-5">
      <ChatBox />
    </Container>
    </>
  );
};

export default Chat;
