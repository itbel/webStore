import React from "react";
import Item from "./Item";

import FireCube from "../media/items/firecube.jpg";
import FireTV from "../media/items/firestick.jpg";
import FireStick4K from "../media/items/4kstick.jpg";
import RokuExpress from "../media/items/rokuexpress.jpg";
import Kindle from "../media/items/kindle.jpg";
import KindlePaperwhite from "../media/items/kindlepaperwhite.jpg";
import Chromecast from "../media/items/chromecastultra.jpg";

import { Grid } from "@material-ui/core";

const Home = () => {
  const items = [
    { name: "Fire TV Cube", price: 139.99, image: FireCube },
    { name: "Fire TV Stick", price: 49.99, image: FireTV },
    { name: "Fire Stick 4K", price: 69.99, image: FireStick4K },
    { name: "Roku Express", price: 39.99, image: RokuExpress },
    { name: "Kindle", price: 119.99, image: Kindle },
    { name: "Kindle Paperwhite", price: 139.99, image: KindlePaperwhite },
    { name: "Chromecast Ultra", price: 89.99, image: Chromecast },
  ];
  return (
    <div>
      <h1>Trending</h1>
      <Grid container spacing={0}>
        {items.map((product, index) => {
          return (
            <Grid item>
              <Item product={product}></Item>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Home;