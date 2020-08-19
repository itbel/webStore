const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Product = new Schema({
  product_name: { type: String, required: true },
  product_manufacturer_name: { type: String },
  product_image_url: { type: String },
  product_description: { type: String },
  product_details: { type: String },
  product_reviews: [
    {
      rating: {
        enum: [0, 1, 2, 3, 4, 5, "No Rating"],
        default: "No Rating",
      },
      review_description: { type: String },
      reviewer_name: { type: String },
    },
  ],
  product_sku: { type: String },
  product_stock: { type: Number },
  product_price: { type: Number },
});

module.exports = mongoose.model("product", Product);
