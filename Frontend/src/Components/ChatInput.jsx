import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

const ChatInput = ({ updateMessage, chatRef, userName }) => {
  const [message, setMessage] = useState("");
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  let reply
  let mes;

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (message.trim() === "") {
      return;
    }
    updateMessage({ content: message, name: userName });
    mes = message;
    setMessage("");
    try {
      const response = await axios.post(
        "https://studylab-backend.onrender.com/chat/assistant",
        { userMessage: mes }
      );
       
      response.data.reply ?  reply =  response.data.reply :  reply =  response.data.errorMessage;
      // console.log(response)
      updateMessage({ content: reply, name: "Assistant" });
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };
  const handleResize = () => {
    // Show or hide the button based on window width
    setIsButtonVisible(window.innerWidth <= 640);
  };

  useEffect(() => {
    // Add event listener when component mounts
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div ref={chatRef}>
      <form className="flex justify-around" onSubmit={handleSendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="sm:w-[100vw] xs:w-[80vw] mx-3 px-3 py-[6px] rounded-xl my-3 bg-[#F0F5F9] outline-none"
        />
        {isButtonVisible && (
          <button
            type="submit"
            className="w-[20vw] rounded-xl bg-[#F0F5F9] mx-3 my-3"
          >
            Send
          </button>
        )}
      </form>
    </div>
  );
};

export default ChatInput;
