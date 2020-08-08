const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  username: {
    type: String,
    required: true,
    minLength: 6,
    unique: true,
    trim: true,
  },
  password: { type: String, required: true, trim: true, minlength: 6 },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  orders: [{ type: Schema.Types.ObjectId, ref: "order" }],
});

module.exports = mongoose.model("user", User);
