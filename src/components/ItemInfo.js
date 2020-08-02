import React from "react";
import { Grid } from "@material-ui/core";
const ItemInfo = (props) => {
  return (
    <>
      <Grid container>
        <Grid item>Image</Grid>
        <Grid item>Description</Grid>
        <Grid item>Item Name:</Grid>
        <Grid item>Stock: </Grid>
        <Grid item></Grid>
        <Grid item></Grid>
      </Grid>
    </>
  );
};

export default ItemInfo;
