import { getComponentValue } from "@latticexyz/recs";
import { awaitStreamValue } from "@latticexyz/utils";
import { ClientComponents } from "./createClientComponents";
import { SetupNetworkResult } from "./setupNetwork";

export type SystemCalls = ReturnType<typeof createSystemCalls>;

export function createSystemCalls(
  { worldSend, txReduced$, singletonEntity }: SetupNetworkResult,
  { Counter }: ClientComponents
) {
  const increment = async () => {
    const tx = await worldSend("increment", []);
    await awaitStreamValue(txReduced$, (txHash) => txHash === tx.hash);
    return getComponentValue(Counter, singletonEntity);
  };

  const sendMessage = async (message: string) => {
    const tx = await worldSend("sendMessage", [message]);
    await awaitStreamValue(txReduced$, (txHash) => txHash === tx.hash);
  };

  const setUsername = async (username: string) => {
    const tx = await worldSend("setUsername", [username]);
    await awaitStreamValue(txReduced$, (txHash) => txHash === tx.hash);
  };

  const setUserInfo = async (username: string, userPicture: string) => {
    const tx = await worldSend("setUserInfo", [username, userPicture]);
    await awaitStreamValue(txReduced$, (txHash) => txHash === tx.hash);
  };

  return {
    increment,
    sendMessage,
    setUsername,
    setUserInfo,
  };
}
