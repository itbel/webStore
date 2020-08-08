import React from "react";
import { TextField, Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const registerCall = () => {
    axios
      .post(
        `http://localhost:3005/api/users/register`,
        {
          username: "testing",
          password: "testing",
          name: "testing",
          email: "testing@gmail.com",
        },
        { timeout: 2000 }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Grid
        xs={10}
        sm={9}
        md={5}
        lg={4}
        xl={3}
        item
        style={{ height: "50vh", margin: "auto" }}
      >
        <Grid style={{ textAlign: "center", marginTop: "15vh" }} item xs={12}>
          <h2>Register</h2>
        </Grid>
        <Grid container spacing={2} style={{ textAlign: "center" }}>
          <Grid item xs={12}>
            <TextField label="Username"></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Password"></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Email"></TextField>
          </Grid>
          <Grid item xs={12}>
            <Link
              style={{
                color: "black",
                textDecoration: "none",
              }}
              to="/login"
            >
              <Button onClick={registerCall}>Register</Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Register;
