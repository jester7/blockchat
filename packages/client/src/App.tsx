import { useComponentValue, useEntityQuery, useRow } from "@latticexyz/react";
import { useMUD } from "./MUDContext";
import { MessageInput } from "./components/MessageInput";
import { Settings } from "./components/Settings";
import { Entity, Has, getComponentValueStrict } from "@latticexyz/recs";
import { useState } from "react";
import { Message } from "./components/Message";
import { BigNumber } from "ethers";

export const App = () => {
  const {
    components: { Counter, Messages, Users },
    systemCalls: { increment, sendMessage, setUsername, setUserInfo },
    network: { singletonEntity, storeCache },
  } = useMUD();

  const messageIds = useEntityQuery([Has(Messages)]);

  //const counter = useComponentValue(Counter, singletonEntity);
  const counter = useRow(storeCache, {table: "Counter", key: {}});

  const [showSettings, setShowSettings] = useState(false);

  const handleToggleSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <>
    <h1 className="title">
      <div className="icon"></div>
      BlockChat
      <button className="settings-button" onClick={handleToggleSettings}>⚙️</button>
      {showSettings && (
        <Settings
          username="jovan"
          userPicture="/android-chrome-192x192.png"
          onUpdateUserInfo={setUserInfo}
          onUpdateFinished={() => setShowSettings(false)}
        />
      )}
    </h1>
      {/* <div>
       Counter: <span>{counter?.value ?? "??"}</span>
        Counter: <span>{counter?.value.value ?? "??"}</span>
      </div>
      <button
        type="button"
        onClick={async (event) => {
          event.preventDefault();
          console.log("new counter value:", await increment());
        }}
      >
        Increment
      </button> */}
      <div className="message-container">
        { messageIds.map((id) => {
          const message = getComponentValueStrict(Messages, id);
          const sender = message.sender;
          const senderName = getComponentValueStrict(Users, BigNumber.from(sender).toHexString() as Entity).username;
          const senderPic = getComponentValueStrict(Users, BigNumber.from(sender).toHexString() as Entity).userPicture;
          //const datetime = message.datetime;
          return ( <Message key={id} username={senderName} userPicture={senderPic} message={message.message} />);
        }) }
      </div>
      <div>
        <MessageInput onSendMessage={sendMessage} />
      </div>

    </>
  );
};
