const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  investor: {
    type: Boolean,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("User", UserSchema);
