import React, { useState } from "react";

interface MessageInputProps {
    onSendMessage: (message: string) => void;
}

export const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
    const [message, setMessage] = useState("");

    const handleSendMessage = () => {
        if (message.trim() !== "") {
            onSendMessage(message);
            setMessage("");
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.keyCode === 13 && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <div className="message-input">
            <textarea
                placeholder="say something..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button onClick={handleSendMessage}>Send</button>
        </div>
    );
};