import React from "react";
import { Message } from "./Message";

interface MessageAreaProps {
  messages: {
    username: string;
    userPicture: string;
    // datetime: string;
    message: string;
  }[];
}

export const MessageArea: React.FC<MessageAreaProps> = ({ messages }) => {
  return (
    <div className="message-area">
      {messages.map((message, index) => (
        <Message
          key={index}
          username={message.username}
          userPicture={message.userPicture}
        //   datetime={message.datetime}
          message={message.message}
        />
      ))}
    </div>
  );
};