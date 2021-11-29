const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    studentId: {
      type: String,
      required: true,
    },

    bloodGroup: {
      type: String,
      required: true,
    },

    isDonor: {
      type: String,
      required: true,
    },

    isEntrepreneur: {
      type: String,
      required: true,
    },

    isReporter: {
      type: String,
      required: true,
    },

    profilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
