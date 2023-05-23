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
        message: "string",
      },
    },
    Users: {
      schema: {
        username: "string",
      },
    },

  },
});
