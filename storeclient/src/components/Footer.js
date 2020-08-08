import React from "react";
import { Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <div
      style={{
        marginTop: "32px",
      }}
    >
      <Grid container>
        <Grid
          container
          direction="row"
          justify={isMobile ? "space-evenly" : "center"}
          alignItems="stretch"
          spacing={isMobile ? 0 : 4}
        >
          <Grid item>
            <h5>Customer Service</h5>
            <h6>Help Center</h6>
            <h6>Track an Order</h6>
            <h6>Return an Item</h6>
            <h6>Feedback</h6>
          </Grid>
          <Grid item>
            <h5>My Account</h5>
            <h6>Login/Register</h6>
            <h6>Wishlist</h6>
            <h6>Return an Item</h6>
            <h6>Feedback</h6>
          </Grid>
          <Grid item>
            <h5>Company</h5>
            <h6>About Us</h6>
            <h6>Careers</h6>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
