import React, { useState } from "react";
import { TextField, Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
    errorTxt: "",
  });
  const loginCall = () => {
    axios
      .post(
        `http://localhost:3005/api/users/login`,
        {
          username: data.username,
          password: data.password,
        },
        { timeout: 2000 }
      )
      .then((response) => {
        setData({ ...data, errorTxt: "" });
      })
      .catch((error) => {
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
          <h2>Login</h2>
        </Grid>
        <Grid container spacing={2} style={{ textAlign: "center" }}>
          <Grid item xs={12}>
            <TextField
              required
              onChange={(e) => {
                setData({ ...data, username: e.target.value });
              }}
              label="Username"
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              onChange={(e) => {
                setData({ ...data, password: e.target.value });
              }}
              type="password"
              label="Password"
            ></TextField>
            <p style={{ color: "red" }}>
              {data.errorTxt.length > 0 ? data.errorTxt : ""}
            </p>
          </Grid>

          <Grid item xs={12}>
            <Button onClick={loginCall} style={{ marginRight: "2px" }}>
              Login
            </Button>

            <Link
              style={{
                color: "black",
                textDecoration: "none",
              }}
              to="/register"
            >
              <Button>Register</Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
