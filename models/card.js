const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const { ObjectId } = Schema.Types;

const cardTypes = "Combatant Device".split(" ");
const ranks = "Pawn Rook Bishop Knight Jack Queen King Joker Beast".split(" ");
const suits = "Club Heart Diamond Spade".split(" ");
const elements = "Fire Water Earth Air".split(" ");
const specialTypes = "Special Draw Move Deploy".split(" ");
const abilities = "Jump Fly Swim".split(" ");
const rarityTypes = "Common Uncommon Rare Exclusive".split(" ");
const directions = "N NW W SW S SE E NE".split(" ");
const targetTypes = "Melee Ranged Shield Magic".split(" ");

const Card = new Schema(
  {
    name: { type: String, required: true },
    cardType: { type: String, enum: cardTypes, required: true },
    rank: { type: String, enum: ranks, required: true },
    value: { type: Number, min: 1, max: 10 },
    suit: { type: String, enum: suits, required: true },
    mobility: [{ type: String, enum: directions, required: true }],
    target: [{ type: String, enum: directions, required: true }],
    targetType: { type: String, enum: targetTypes, required: true },
    ability: [{ type: String, enum: abilities }],
    element: { type: String, enum: elements },
    specialType: { type: String, enum: specialTypes },
    description: String,
    owner: { type: ObjectId, ref: "User" },
    rarity: { type: String, enum: rarityTypes, default: "Common" },
    graphic: Buffer,
    collection: {},
    metadata: {},
  },
  { timestamps: true }
);

module.exports = model("card", Card);
