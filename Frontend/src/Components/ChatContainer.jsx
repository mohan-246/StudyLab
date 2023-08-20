import React, { useState, useEffect,useRef } from "react";
import ChatInput from "./ChatInput";
import { ChatMessage } from "./ChatMessage";
import axios from "axios";
import { Header } from "./Header";

function ChatContainer({userName})
{
  const [messages, setMessages] = useState([{
    content:"Hi, how may I help you today?",
    name:"Assistant"
  }]);
  const chatRef=useRef()
  const sendMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
   
  };
  useEffect(() => {
    if (chatRef.current) {
      const shouldScroll =
        chatRef.current.scrollHeight - chatRef.current.scrollTop <=
        chatRef.current.clientHeight + 20; // Add a small buffer
      if (shouldScroll) {
        chatRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [messages]);
  return (
    <div className=" h-full">
     <Header />
      <div className=" bg-[#C9D6DF] h-full flex flex-col justify-end overflow-y-auto  pt-[52px] w-full">
        {/* Render your chat messages here */}
        <ul>
          {messages.map((message, index) => (
            <li key={index}>
              <ChatMessage key={index} content={message.content} name={message.name} />
            </li>
          ))}
        </ul>
      </div>
      <div className=" bottom-0  bg-[#1E2022]">
        <ChatInput updateMessage={sendMessage} chatRef={chatRef} userName={userName} />{" "}
        {/* Pass the sendMessage function as a prop */}
      </div>
    </div>
  );
}

export default ChatContainer;
