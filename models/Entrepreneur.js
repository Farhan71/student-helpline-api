const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    startUpName: {
      type: String,
      required: true,
    },
    startUpType: {
      type: String,
      required: true,
    },
    productType: {
      type: String,
      required: true,
    },

    locationRange: {
      type: String,
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
  },
  price: {
      type: Number,
      required: true,
  },
  contact: {
      type: Number,
      required: true,
  },
    desc: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
