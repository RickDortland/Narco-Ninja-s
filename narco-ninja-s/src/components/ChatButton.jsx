import React from "react";
import "../css/ChatButton.css";

function ChatButton() {
  const handleChatClick = () => {
    alert("AI Chat geopend!"); // Vervang dit met je chatfunctionaliteit
  };

  return (
    <button className="chat-button" onClick={handleChatClick}>
      <img
        src="/path/to/chat-icon.svg" // Voeg hier het pad naar je chat-icoon toe
        alt="Chat"
        className="chat-icon"
      />
    </button>
  );
}

export default ChatButton;