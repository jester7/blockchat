// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { System } from "@latticexyz/world/src/System.sol";
import { getUniqueEntity } from "@latticexyz/world/src/modules/uniqueentity/getUniqueEntity.sol";

import {
    Messages,
    MessagesData
} from "../codegen/Tables.sol";

contract MessageSystem is System {
    function sendMessage(string memory message) public {
        bytes32 id = getUniqueEntity();

        Messages.set(id, MessagesData({
                image: false,
                message: message
            }));
    }
}
