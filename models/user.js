const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const { ObjectId } = Schema.Types;

const userRoles = [8737, 3348, 2366];

const Preferences = new Schema({
  timezone: String,
  darkMode: Boolean,
  theme: {},
});

const User = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    _name: {
      firstName: String,
      middleName: String,
      lastName: String,
    },
    dob: Date,
    rank: Number,
    decks: [
      {
        deck: { type: ObjectId, ref: "Deck" },
        name: String,
        public: { type: Boolean, default: false },
      },
    ],
    achievements: [],
    activity: [],
    roles: {
      type: [{ type: Number, enum: userRoles }],
      default: [userRoles[0]],
    },
    description: String,
    preferences: Preferences,
    refreshToken: String,
  },
  { timestamps: true }
);
module.exports = model("user", User);
