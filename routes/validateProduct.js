module.exports = function (data) {
  let obj = {};
  obj.msg = "";
  obj.accepted = true;
  if (data.product_name.length < 2 || data.product_name.length > 30) {
    obj.msg += "Product name failed to validate.\n";
    obj.accepted = false;
  }
  if (
    data.product_manufacturer_name.length < 2 ||
    data.product_manufacturer_name.length > 30
  ) {
    obj.msg += "Product manufacturer failed to validate.\n";
    obj.accepted = false;
  }
  if (data.product_sku.length < 2 || data.product_sku.length > 30) {
    obj.msg += "Product SKU failed to validate.\n";
    obj.accepted = false;
  }
  if (
    data.product_description.length < 2 ||
    data.product_description.length > 1000
  ) {
    obj.msg += "Product description failed to validate.\n";
    obj.accepted = false;
  }
  if (data.product_details.length < 2 || data.product_details.length > 1000) {
    obj.msg += "Product details failed to validate.\n";
    obj.accepted = false;
  }
  if (
    !/^\d+$/.test(data.product_stock) ||
    data.product_stock < 0 ||
    data.product_stock > 100000 ||
    data.product_stock.length === 0
  ) {
    obj.msg += "Failed to validate stock.\n";
    obj.accepted = false;
  }
  if (
    !/^\d+$/.test(data.product_price) ||
    data.product_price < 1 ||
    data.product_price > 100000
  ) {
    obj.msg += "Failed to validate price.\n";
    obj.accepted = false;
  }
  return obj;
};
