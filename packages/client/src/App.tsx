import { useComponentValue, useRow } from "@latticexyz/react";
import { useMUD } from "./MUDContext";
import { MessageInput } from "./components/MessageInput";

export const App = () => {
  const {
    components: { Counter, Messages },
    systemCalls: { increment, sendMessage },
    network: { singletonEntity, storeCache },
  } = useMUD();

  //const counter = useComponentValue(Counter, singletonEntity);
  const counter = useRow(storeCache, {table: "Counter", key: {}});
  return (
    <>
    <h1 className="title">
      <div className="icon"></div>
      BlockChat
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
      <div>
        <MessageInput onSendMessage={sendMessage} />
      </div>

    </>
  );
};
