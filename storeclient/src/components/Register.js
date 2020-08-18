import React, { useState } from "react";
import { TextField, Grid, Button } from "@material-ui/core";
import axios from "axios";

const Register = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
    email: "",
    name: "",
    errorTxt: "",
  });
  const registerCall = () => {
    axios
      .post(
        `http://localhost:3005/api/users/register`,
        {
          username: data.username,
          password: data.password,
          name: data.name,
          email: data.email,
        },
        { timeout: 2000 }
      )
      .then((response) => {
        console.log(response);
        setData({ ...data, errorTxt: "" });
      })
      .catch((error) => {
        console.log(error);
        setData({ ...data, errorTxt: error.message || error.statusText });
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
            <TextField
              onChange={(e) => {
                setData({ ...data, username: e.target.value });
              }}
              label="Username"
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={(e) => {
                setData({ ...data, password: e.target.value });
              }}
              type="password"
              label="Password"
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
              label="Name"
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={(e) => {
                setData({ ...data, email: e.target.value });
              }}
              label="Email"
            ></TextField>
            <p style={{ color: "red" }}>
              {data.errorTxt.length > 0 ? data.errorTxt : ""}
            </p>
          </Grid>
          <Grid item xs={12}>
            <Button onClick={registerCall}>Register</Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Register;
