import React, { useState } from "react";
import Item from "./Item";

import FireCube from "../media/items/firecube.jpg";
import FireTV from "../media/items/firestick.jpg";
import FireStick4K from "../media/items/4kstick.jpg";
import RokuExpress from "../media/items/rokuexpress.jpg";
import Kindle from "../media/items/kindle.jpg";
import KindlePaperwhite from "../media/items/kindlepaperwhite.jpg";
import Chromecast from "../media/items/chromecastultra.jpg";
import Echo from "../media/items/echo.jpg";
import FireHD8 from "../media/items/firehd8.jpg";
import Fire7 from "../media/items/fire7.jpg";
import EchoShow8 from "../media/items/echoshow8.jpg";
import BlinkXT2 from "../media/items/blinkxt2.jpg";
import { Grid, Button } from "@material-ui/core";

const Home = () => {
  const [maxIndex, setMaxIndex] = useState(6);
  const items = [
    { name: "Fire TV Cube", price: 139.99, image: FireCube },
    { name: "Fire TV Stick", price: 49.99, image: FireTV },
    { name: "Fire Stick 4K", price: 69.99, image: FireStick4K },
    { name: "Roku Express", price: 39.99, image: RokuExpress },
    { name: "Kindle", price: 119.99, image: Kindle },
    { name: "Kindle Paperwhite", price: 139.99, image: KindlePaperwhite },
    { name: "Chromecast Ultra", price: 89.99, image: Chromecast },
    { name: "Echo Dot", price: 69.99, image: Echo },
    { name: "Fire HD 8", price: 129.99, image: FireHD8 },
    { name: "Fire 7", price: 69.99, image: Fire7 },
    { name: "Echo Show 8", price: 114.99, image: EchoShow8 },
    { name: "Blink XT2", price: 89.99, image: BlinkXT2 },
  ];
  return (
    <div>
      <Grid container justify="center">
        {/*<img alt="" src={Header}></img>*/}
      </Grid>
      <h1 style={{ textAlign: "center" }}>Trending</h1>

      <Grid container justify="center" spacing={4}>
        {items.map((product, index) => {
          if (index < maxIndex)
            return (
              <Grid
                key={index}
                align="center"
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={2}
              >
                <Grid item align="center">
                  <Item product={product}></Item>
                </Grid>
              </Grid>
            );
          else {
            return null;
          }
        })}
      </Grid>
      <Grid style={{ marginTop: "32px" }} align="center">
        <Button
          style={
            maxIndex > items.length || maxIndex === items.length
              ? { display: "none" }
              : null
          }
          onClick={() => {
            setMaxIndex(maxIndex + 6);
          }}
          variant="contained"
        >
          Load more...
        </Button>
      </Grid>
    </div>
  );
};

export default Home;
