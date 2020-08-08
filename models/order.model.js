const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Order = new Schema({
  cart: [
    { product: { type: Schema.Types.ObjectId, ref: "product" }, qty: Number },
  ],
  shipping_address: {
    customerName: { type: String },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    delivery_instructions: { type: String },
  },
  payment: {
    method: { type: String },
    transaction_id: { type: String },
    status: { type: String, enum: ["accepted", "declined"] },
  },
  order_status: {
    courier_name: { type: String },
    tracking_number: { type: String },
    status: { type: String, enum: ["order_received", "order_shipped"] },
  },
});

module.exports = mongoose.model("order", Order);
