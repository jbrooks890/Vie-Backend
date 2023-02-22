const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const { ObjectId } = Schema.Types;

// :::::::::::\ PLAYER /:::::::::::
const Player = new Schema(
  {
    user: { type: ObjectId, ref: "User" },
    deck: { type: ObjectId, ref: "Deck" },
  },
  {
    virtuals: {
      name: {
        get() {
          return this.user.username;
        },
      },
    },
    toJSON: { virtuals: true, getters: true },
    toObject: { virtuals: true, getters: true },
  }
);

// :::::::::::\ GAME OUTCOME /:::::::::::
const GameOutcome = new Schema(
  {
    outcomeType: {
      type: String,
      enum: ["Win", "Lose", "Draw", "No Contest"],
    },
    winner: { type: ObjectId, ref: "Player" },
    loser: { type: ObjectId, ref: "Player" },
  },
  { timestamps: true }
);

// %%%%%%%%%%%%%%%\ GAME /%%%%%%%%%%%%%%%
const Game = new Schema(
  {
    players: {
      light: Player,
      dark: Player,
    },
    board: { type: ObjectId, ref: "Board" },
    outcome: GameOutcome,
    ruleset: [],
    limitations: [],
    chronicle: {},
    startTime: Date,
    endTime: Date,
    venue: String,
  },
  {
    timestamps: true,
    virtuals: {
      duration: {
        get() {
          return this.endTime - this.startTime;
        },
      },
    },
    toJSON: { virtuals: true, getters: true },
    toObject: { virtuals: true, getters: true },
  }
);

module.exports = model("game", Game);
