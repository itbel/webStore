import React from "react";
import { Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
const Support = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <div style={{ height: "70vh" }}>
      <h1 style={{ textAlign: "center" }}>Customer Support</h1>
      <Grid container>
        <Grid
          container
          direction="row"
          justify={isMobile ? "space-evenly" : "center"}
          alignItems="stretch"
          spacing={isMobile ? 0 : 4}
        >
          <Grid item>
            <h6>Phone Number</h6>
            <h6>Live Chat</h6>
            <h6>Return an Item</h6>
            <h6>Product Questions</h6>
          </Grid>
          <Grid item>
            <h6>Feedback</h6>
            <h6>Order Issues</h6>
            <h6>General Questions</h6>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Support;
