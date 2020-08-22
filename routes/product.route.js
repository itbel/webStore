const router = require("express").Router();
const verify = require("./verifyToken");
const validateProduct = require("./validateProduct");

let productModel = require("../models/product.model");

router.post("/manage", (req, res, next) => {
  if (validateProduct(req.body).accepted) {
    productModel.create(
      {
        product_name: req.body.product_name,
        product_manufacturer_name: req.body.product_manufacturer_name,
        product_image_url: req.body.product_image_url,
        product_description: req.body.product_description,
        product_details: req.body.product_details,
        product_sku: req.body.product_sku,
        product_stock: req.body.product_stock,
        product_price: req.body.product_price,
      },
      (err, doc) => {
        if (err) next(err);
        else {
          res.status(201).json({ msg: "Product created." });
        }
      }
    );
  } else {
    res.status(401).json({ error: validateProduct(req.body).msg });
  }
});

module.exports = router;
