import { defineMongooseModel } from "#nuxt/mongoose";

export const UserScheme = defineMongooseModel({
  name: "User",
  schema: {
    name: { type: "string", required: true, unique: true },
  },
});
