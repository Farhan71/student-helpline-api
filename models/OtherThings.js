const mongoose = require("mongoose");

const OtherThingsSchema = new mongoose.Schema(
  {
    type: {
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

module.exports = mongoose.model("OtherThings", OtherThingsSchema);
