import { defineMongooseModel } from "#nuxt/mongoose";

export const MatchScheme = defineMongooseModel({
  name: "Match",
  schema: {
    code: { type: "string", required: true, unique: true },
  },
});
