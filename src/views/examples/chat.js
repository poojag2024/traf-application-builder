import React, { useState } from 'react';
import { Container, Row, Col, Input, Button, ListGroup, ListGroupItem } from 'reactstrap';
import Header from "components/Headers/Header.js";

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
      <Row>
        <Col md="6" className="mx-auto">
          <h2 className="text-center">ChatGPT</h2>
          <ListGroup className="mb-3" style={{ maxHeight: '400px', overflowY: 'scroll' }}>
            {messages.map((msg, index) => (
              <ListGroupItem key={index} className={msg.sender === 'User' ? 'text-end' : 'text-start'}>
                <strong>{msg.sender}: </strong>
                {msg.text}
              </ListGroupItem>
            ))}
          </ListGroup>
          <Row>
            <Col>
              <Input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
              />
            </Col>
            <Col xs="auto">
              <Button color="primary" onClick={handleSend}>
                Send
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Chat;
