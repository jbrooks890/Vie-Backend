const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const { ObjectId } = Schema.Types;

let Move, Deploy, Renege, Trigger, Attack, Draw;

Move = new Schema({
  card: { type: ObjectId, ref: "Card" },
  from: String,
  to: String,
});

Deploy = new Schema({
  card: { type: ObjectId, ref: "Card" },
  destination: String,
});

Trigger = new Schema({
  card: { type: ObjectId, ref: "Card" },
  target: { type: ObjectId, ref: "Card" },
});

const Action = new Schema({}, { timestamps: true });

module.exports = model("gameAction", Action);
