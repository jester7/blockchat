import React, { useEffect, useRef } from "react";
import { Message } from "./Message";
import { Entity, getComponentValueStrict } from "@latticexyz/recs";
import { useMUD } from "../MUDContext";
import { BigNumber } from "ethers";

interface MessageAreaProps {
    messageIds: Entity[];
}

export const MessageArea: React.FC<MessageAreaProps> = ({ messageIds }) => {
    const {
        components: { Messages, Users },
    } = useMUD();

    const messageAreaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (messageAreaRef.current) {
            messageAreaRef.current.scrollTop = messageAreaRef.current.scrollHeight;
        }
    }, [messageIds]);

    return (
        <div className="message-area" ref={messageAreaRef}>
            {messageIds.map((id) => {
                const message = getComponentValueStrict(Messages, id);
                const sender = message.sender;
                const senderName = getComponentValueStrict(Users, BigNumber.from(sender).toHexString() as Entity).username;
                const senderPic = getComponentValueStrict(Users, BigNumber.from(sender).toHexString() as Entity).userPicture;
                //const datetime = message.datetime;
                return (<Message key={id} username={senderName} userPicture={senderPic} message={message.message} />);
            })}
        </div>
    );
};