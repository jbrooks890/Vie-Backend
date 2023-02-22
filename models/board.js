const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const { ObjectId } = Schema.Types;

const bonusTypes = "Special Draw Move".split(" ");

const Board = new Schema(
  {
    size: {
      rows: {
        type: Number,
        default: 10,
        min: 8,
        validate: { validator: v => v % 2 === 0 },
      },

      columns: {
        type: Number,
        default: 10,
        min: 8,
        validate: { validator: v => v % 2 === 0 },
      },
    },
    bonusSpaces: [
      {
        cellID: String,
        bonusType: bonusTypes,
      },
    ],
  },
  { timestamps: true }
);

module.exports = model("board", Board);
