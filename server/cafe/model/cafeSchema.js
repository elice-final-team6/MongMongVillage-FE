const mongoose = require("mongoose");
const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema;

const CafeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: [
    {
      latitude: {
        type: Number,
        required: true,
      },
      longitude: {
        type: Number,
        required: true,
      },
    },
  ],
  description: {
    type: String,
  },
  phone_number: {
    type: String,
  },
});

module.exports = { CafeSchema };
