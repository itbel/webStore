import React, { useState } from "react";
import { TextField, Grid, Button, IconButton } from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";

const AddProduct = () => {
  const [data, setData] = useState({
    product_name: "",
    manufacturer: "",
    sku: "",
    description: "",
    details: "",
    price: "",
    stock: 0,
  });
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

    return msg.length === 0 ? true : msg;
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
              label="Product Name"
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              onChange={(e) => {
                setData({ ...data, manufacturer: e.target.value });
              }}
              label="Manufacturer"
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={(e) => {
                setData({ ...data, description: e.target.value });
              }}
              label="Product Description"
              multiline={true}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={(e) => {
                setData({ ...data, details: e.target.value });
              }}
              label="Product Details"
              multiline={true}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              onChange={(e) => {
                setData({ ...data, sku: e.target.value });
              }}
              label="SKU"
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              onChange={(e) => {
                setData({ ...data, stock: e.target.value });
              }}
              defaultValue={0}
              label="Stock"
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              onChange={(e) => {
                setData({ ...data, price: e.target.value });
              }}
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
                console.log(validateProduct(data));
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
