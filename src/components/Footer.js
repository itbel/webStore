import React from "react";
import { Grid } from "@material-ui/core";
const Footer = () => {
  return (
    <div style={{ marginTop: "32px", backgroundColor: "#f3f3f3" }}>
      <Grid justify="center" container spacing={3}>
        <Grid item>
          <div>
            <h5>Customer Service</h5>
            <h6>Help Center</h6>
            <h6>Track an Order</h6>
            <h6>Return an Item</h6>
            <h6>Feedback</h6>
          </div>
        </Grid>
        <Grid item>
          <div>
            <h5>My Account</h5>
            <h6>Login/Register</h6>
            <h6>Wishlist</h6>
            <h6>Return an Item</h6>
            <h6>Feedback</h6>
          </div>
        </Grid>
        <Grid item>
          <div>
            <h5>Company</h5>
            <h6>About Us</h6>
            <h6>Careers</h6>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
