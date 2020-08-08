const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: { type: String, required: true, trim: true, minlength: 4 },
  name: { type: String, required: true },
  email: { type: String, required: true },
  orders: [{ type: Schema.Types.ObjectId, ref: "order" }],
});

module.exports = mongoose.model("user", User);
