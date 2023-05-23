// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { System } from "@latticexyz/world/src/System.sol";
import { addressToEntity } from "../Utils.sol";
import "forge-std/console.sol";

import {
    Users,
    UsersData
} from "../codegen/Tables.sol";

contract UserSystem is System {
    function setUsername(string memory username) public {
        bytes32 sender = addressToEntity(_msgSender());
        console.log("setUsername: %s with userpic <%s>", username, Users.getUserPicture(sender));

        Users.set(sender, UsersData({
                username: username,
                userPicture: Users.getUserPicture(sender)
            }));
    }

    function setUserInfo(string memory username, string memory userPicture) public {
        bytes32 sender = addressToEntity(_msgSender());
        console.log("setUserInfo: %s with userpic <%s>", username, userPicture);

        Users.set(sender, UsersData({
                username: username,
                userPicture: userPicture
            }));
    }
}
