import { mudConfig } from "@latticexyz/world/register";

export default mudConfig({
  tables: {
    Counter: {
      keySchema: {},
      schema: "uint32",
    },
    Messages: {
      schema: {
        sender: "bytes32",
        datetime: "uint256",
        message: "string",
      },
    },
    Users: {
      keySchema: {
        user: "bytes32",
      },
      schema: {
        username: "string",
        userPicture: "string",
      },
    },
  },
  modules: [
    {
      name: "UniqueEntityModule",
      root: true,
      args: [],
    }
  ],
});
