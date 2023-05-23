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
    <div className="message">
      <img className="user-picture" src={userPicture} alt={`${username}'s profile picture`} />
      <div className="message-content">
        <div className="message-header">
          <span className="username">{username}</span>
        </div>
        <div className="message-body">{message}</div>
      </div>
    </div>
  );
};