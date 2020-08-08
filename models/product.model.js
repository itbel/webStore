const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Product = new Schema({
  product_name: { type: String, required: true },
  manufacturer_name: { type: String, required: true },
  sku: { type: String, required: true },
  stock: { type: Boolean },
});

module.exports = mongoose.model("product", Product);