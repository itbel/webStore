import React from "react";
import { TextField, Grid, Button } from "@material-ui/core";
const Login = () => {
  return (
    <>
      <Grid container justify="center" style={{ height: "50vh" }}>
        <Grid
          item
          xs={12}
          sm={9}
          md={3}
          style={{ backgroundColor: "lightgrey" }}
        >
          <h3>Login</h3>
          <TextField label="Username"></TextField>
          <TextField label="Password"></TextField>
          <Grid item style={{ padding: "8px", justifyContent: "center" }}>
            <Button variant="contained">Login</Button>
            <Button variant="contained">Register</Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
