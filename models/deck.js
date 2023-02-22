const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const { ObjectId } = Schema.Types;

const Deck = new Schema(
  {
    name: String,
    owner: { type: ObjectId, ref: "User" },
    cards: {
      type: [{ type: ObjectId, ref: "Card" }],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("deck", Deck);
