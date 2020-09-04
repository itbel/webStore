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
} from "@material-ui/core";

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
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Item Name</TableCell>
                    <TableCell align="right">Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {shoppingCart.items.map((row, key) => (
                    <TableRow key={key}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.price}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell>Total</TableCell>
                    <TableCell align="right">$100</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Button>Checkout</Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Cart;
