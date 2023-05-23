import { useComponentValue, useEntityQuery, useRow } from "@latticexyz/react";
import { useMUD } from "./MUDContext";
import { MessageInput } from "./components/MessageInput";
import { Settings } from "./components/Settings";
import { Has, getComponentValueStrict } from "@latticexyz/recs";
import { useState } from "react";

export const App = () => {
  const {
    components: { Counter, Messages },
    systemCalls: { increment, sendMessage },
    network: { singletonEntity, storeCache },
  } = useMUD();

  const messageIds = useEntityQuery([Has(Messages)]);

  //const counter = useComponentValue(Counter, singletonEntity);
  const counter = useRow(storeCache, {table: "Counter", key: {}});

  const [showSettings, setShowSettings] = useState(false);

  const handleToggleSettings = () => {
    setShowSettings(!showSettings);
  };

  const handleUpdateSettings = (username: string, userPicture: string) => {
    // handle updating settings here
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
          onUpdateSettings={handleUpdateSettings}
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
          return ( <div key={id}> {message.message} </div>);
        }) }
      </div>
      <div>
        <MessageInput onSendMessage={sendMessage} />
      </div>

    </>
  );
};
