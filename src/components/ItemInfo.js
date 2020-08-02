import React from "react";
import { Grid } from "@material-ui/core";
import FireCube from "../media/items/firecube.jpg";
const ItemInfo = (props) => {
  const item = { name: "Fire TV Cube", price: 139.99, image: FireCube };

  return (
    <>
      <Grid
        xs={10}
        sm={9}
        md={5}
        lg={4}
        xl={3}
        item
        style={{ border: "solid 1px black", minHeight: "50vh", margin: "auto" }}
      >
        <Grid item>{item.name}</Grid>
        <Grid item>{item.price}</Grid>
        <Grid item>
          <img width={250} alt="" src={item.image}></img>
        </Grid>
      </Grid>
    </>
  );
};

export default ItemInfo;
