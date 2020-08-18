import React, { useState } from "react";
import { TextField, Grid, Button } from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";

const AddProduct = () => {
  const [data, setData] = useState({
    item_name: "",
    manufacturer: "",
    sku: "",
    item_description: "",
    price: "",
    stock: 0,
  });
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
                setData({ ...data, item_name: e.target.value });
              }}
              label="Item Name"
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              onChange={(e) => {
                setData({ ...data, item_name: e.target.value });
              }}
              label="Manufacturer"
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              onChange={(e) => {
                setData({ ...data, item_name: e.target.value });
              }}
              label="SKU"
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              onChange={(e) => {
                setData({ ...data, item_name: e.target.value });
              }}
              label="Stock"
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              onChange={(e) => {
                setData({ ...data, item_name: e.target.value });
              }}
              label="Price"
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <ImageIcon></ImageIcon>
          </Grid>
          <Grid item xs={12}>
            <Button onClick={() => {}} style={{ marginRight: "2px" }}>
              Add
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default AddProduct;
