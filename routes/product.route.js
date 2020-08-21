const router = require("express").Router();
const verify = require("./verifyToken");
const productModel = require("../models/product.model");

const validateProduct = (data) => {
  let msg = "";
  if (data.product_name.length < 2 || data.product_name.length > 30)
    msg += "Product name failed to validate.\n";
  if (data.manufacturer.length < 2 || data.manufacturer.length > 30)
    msg += "Product manufacturer failed to validate.\n";
  if (data.sku.length < 2 || data.sku.length > 30)
    msg += "Product SKU failed to validate.\n";
  if (data.description.length < 2 || data.description.length > 1000)
    msg += "Product description failed to validate.\n";
  if (data.details.length < 2 || data.details.length > 1000)
    msg += "Product details failed to validate.\n";
  if (
    !/^\d+$/.test(data.stock) ||
    data.stock < 0 ||
    data.stock > 100000 ||
    data.stock.length === 0
  )
    msg += "Failed to validate stock.\n";
  if (!/^\d+$/.test(data.price) || data.price < 1 || data.price > 100000)
    msg += "Failed to validate price.\n";

  return msg;
};

router.post("/manage", (req, res, next) => {
  if (validateProduct(req.body).length === 0) {
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
        else res.status(201).json({ msg: "Product created." });
      }
    );
  } else {
    res.status(401).json({ error: validateProduct(req.body) });
  }
});

module.exports = router;
