const router = require("express").Router();
const verify = require("./verifyToken");
const productModel = require("../models/product.model");

router.post("/manage", (req, res, next) => {
  productModel.create(
    {
      product_name: req.body.product_name,
      product_manufacturer_name: req.body.product_manufacturer_name,
      product_image_url: req.product_image_url,
      product_description: req.product_description,
      product_details: req.product_details,
      product_sku: req.product_sku,
      product_stock: req.product_stock,
      product_price: req.product_price,
    },
    (err, doc) => {
      if (err) next(err);
      else res.status(201).json({ msg: "Product created." });
    }
  );
});

module.exports = router;
