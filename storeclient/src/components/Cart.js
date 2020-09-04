import React, { useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Paper,
  ListSubheader,
} from "@material-ui/core";
import IndeterminateCheckBoxOutlinedIcon from "@material-ui/icons/IndeterminateCheckBoxOutlined";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
const Cart = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const shoppingCart = {
    items: [
      { name: "Roku Express", price: 39.99 },
      { name: "Fire Stick 4K", price: 69.99 },
      { name: "Fire TV Cube", price: 139.99 },
      { name: "Fire TV Stick", price: 49.99 },
      { name: "Chromecast Ultra", price: 89.99 },
      { name: "Kindle", price: 119.99 },
      { name: "Kindle Paperwhite", price: 139.99 },
    ],
  };
  return (
    <>
      <Grid container>
        <Grid
          container
          direction="row"
          justify={isMobile ? "space-evenly" : "center"}
          alignItems="stretch"
        >
          <Grid lg={4} xs={12}>
            <Paper>
              <List>
                {shoppingCart.items.map((row, key) => (
                  <ListItem button key={""}>
                    <ListItemIcon>
                      <AddBoxOutlinedIcon></AddBoxOutlinedIcon>
                      <IndeterminateCheckBoxOutlinedIcon></IndeterminateCheckBoxOutlinedIcon>
                    </ListItemIcon>
                    <ListItemText
                      primary={row.name}
                      secondary={`Qty:${1} $${row.price}`}
                      style={{ width: "200px", textAlign: "left" }}
                    ></ListItemText>
                  </ListItem>
                ))}
              </List>
              <Button>Checkout</Button>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Cart;
