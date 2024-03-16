import React from "react";

function Message({messageText, removeMessage}) {
  return (
    <div className="message">
      <p>{messageText}</p>
      {/* ToDo: make this span a button */}
      <span className="close-message" onClick={removeMessage}>X</span>
    </div>
  )
}

export default Message;