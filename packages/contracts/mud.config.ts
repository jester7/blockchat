import { mudConfig } from "@latticexyz/world/register";

export default mudConfig({
  tables: {
    Counter: {
      keySchema: {},
      schema: "uint32",
    },
    Messages: {
      schema: {
        image: "bool",
        sender: "bytes32",
        datetime: "uint256",
        message: "string",
      },
    },
    Users: {
      schema: {
        address: "bytes32",
        userPicture: "string",
        username: "string",
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
