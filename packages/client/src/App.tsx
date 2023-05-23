import { useComponentValue, useEntityQuery, useRow } from "@latticexyz/react";
import { useMUD } from "./MUDContext";
import { MessageInput } from "./components/MessageInput";
import { Settings } from "./components/Settings";
import { Entity, Has, getComponentValueStrict } from "@latticexyz/recs";
import { useState } from "react";
import { Message } from "./components/Message";
import { BigNumber } from "ethers";
import { MessageArea } from "./components/MessageArea";

export const App = () => {
  const {
    components: { Counter, Messages, Users },
    systemCalls: { increment, sendMessage, setUsername, setUserInfo },
    network: { singletonEntity, storeCache },
  } = useMUD();

  const messageIds = useEntityQuery([Has(Messages)]);
  const users = useEntityQuery([Has(Users)]);

  //const counter = useComponentValue(Counter, singletonEntity);
  const counter = useRow(storeCache, { table: "Counter", key: {} });

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
            onUpdateUserInfo={setUserInfo}
            onUpdateFinished={handleToggleSettings}
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
      <MessageArea key={users.toString()} messageIds={messageIds} />
      <div>
        <MessageInput onSendMessage={sendMessage} />
      </div>

    </>
  );
};
