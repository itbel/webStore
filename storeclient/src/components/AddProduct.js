import React, { useState } from "react";
import { TextField, Grid, Button, IconButton } from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
import axios from "axios";
const AddProduct = () => {
  const [data, setData] = useState({
    product_name: "",
    product_manufacturer_name: "",
    product_image_url: "",
    product_sku: "",
    product_description: "",
    product_details: "",
    product_price: "",
    product_stock: 0,
  });
  const validateProduct = () => {
    let msg = "";
    if (data.product_name.length < 2 || data.product_name.length > 30)
      msg += "Product name failed to validate.\n";
    if (
      data.product_manufacturer_name.length < 2 ||
      data.product_manufacturer_name.length > 30
    )
      msg += "Product manufacturer failed to validate.\n";
    if (data.product_sku.length < 2 || data.product_sku.length > 30)
      msg += "Product SKU failed to validate.\n";
    if (
      data.product_description.length < 2 ||
      data.product_description.length > 1000
    )
      msg += "Product description failed to validate.\n";
    if (data.product_details.length < 2 || data.product_details.length > 1000)
      msg += "Product details failed to validate.\n";
    if (
      !/^\d+$/.test(data.product_stock) ||
      data.product_stock < 0 ||
      data.product_stock > 100000 ||
      data.product_stock.length === 0
    )
      msg += "Failed to validate stock.\n";
    if (
      !/^\d+$/.test(data.product_price) ||
      data.product_price < 1 ||
      data.product_price > 100000
    )
      msg += "Failed to validate price.\n";

    return msg;
  };
  const request = () => {
    axios
      .post("http://localhost:3005/api/products/manage", {
        product_name: data.product_name,
        product_manufacturer_name: data.product_manufacturer_name,
        product_image_url: data.product_image_url,
        product_description: data.product_description,
        product_details: data.product_details,
        product_sku: data.product_sku,
        product_stock: data.product_stock,
        product_price: data.product_price,
      })
      .then((response) => {
        setData({
          product_name: "",
          product_manufacturer_name: "",
          product_image_url: "",
          product_sku: "",
          product_description: "",
          product_details: "",
          product_price: "",
          product_stock: 0,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Grid
        xs={10}
        sm={9}
        md={5}
        lg={4}
        xl={3}
        item
        style={{ height: "50vh", margin: "auto" }}
      >
        <Grid style={{ textAlign: "center", marginTop: "15vh" }} item xs={12}>
          <h2>Add Product</h2>
        </Grid>
        <Grid container spacing={2} style={{ textAlign: "center" }}>
          <Grid item xs={12}>
            <TextField
              required
              onChange={(e) => {
                setData({ ...data, product_name: e.target.value });
              }}
              value={data.product_name}
              label="Product Name"
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              onChange={(e) => {
                setData({ ...data, product_manufacturer_name: e.target.value });
              }}
              value={data.product_manufacturer_name}
              label="Manufacturer"
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={(e) => {
                setData({ ...data, product_description: e.target.value });
              }}
              label="Product Description"
              value={data.product_description}
              multiline={true}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={(e) => {
                setData({ ...data, product_details: e.target.value });
              }}
              label="Product Details"
              value={data.product_details}
              multiline={true}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              onChange={(e) => {
                setData({ ...data, product_sku: e.target.value });
              }}
              value={data.product_sku}
              label="SKU"
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              onChange={(e) => {
                setData({ ...data, product_stock: e.target.value });
              }}
              value={data.product_stock}
              label="Stock"
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              onChange={(e) => {
                setData({ ...data, product_price: e.target.value });
              }}
              value={data.product_price}
              label="Price"
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <IconButton>
              <ImageIcon></ImageIcon>
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            <Button
              onClick={() => {
                if (validateProduct(data).length === 0) {
                  request();
                } else {
                  console.log(validateProduct(data));
                }
              }}
              style={{ marginRight: "2px" }}
            >
              Enter
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default AddProduct;
