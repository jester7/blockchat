import React from "react";

interface MessageProps {
  username: string;
  userPicture: string;
//   datetime: string;
  message: string;
}

export const Message: React.FC<MessageProps> = ({
  username,
  userPicture,
//   datetime,
  message,
}) => {
  return (
    <div className="message-bubble">
      <div className="message-header">
        <img src={userPicture} />
        <div className="message-info">
          <div className="message-username">{username}</div>
          {/* <div className="message-datetime">{datetime}</div> */}
        </div>
      </div>
      <div className="message-text">{message}</div>
    </div>
  );
};