import React, {useEffect} from "react";

function Message({messageText, removeMessage, messageDuration}) {

  useEffect(() => {
    const timeoutMessage = window.setTimeout(() => {
      removeMessage();
    }, messageDuration);

    return () => window.clearTimeout(timeoutMessage);
  })

  return (
    <div className="message">
      <p>{messageText}</p>
      {/* ToDo: make this span a button */}
      <span className="close-message" onClick={removeMessage}>X</span>
    </div>
  )
}

export default Message;