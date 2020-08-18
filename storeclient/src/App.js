import React from "react";
import { Route, Switch } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
// Components
import Home from "./components/Home";
import Contact from "./components/Contact";
import Support from "./components/Support";
import Nav from "./components/Nav";

import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import ItemInfo from "./components/ItemInfo";
import AddProduct from "./components/AddProduct";

export default function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const useStyles = makeStyles((theme) => ({
    root: {
      height: "100vh",
      flexGrow: 1,
      padding: isMobile ? theme.spacing(0) : theme.spacing(2),
    },
  }));
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Nav />
        <Switch>
          <Route exact from="/" render={(props) => <Home {...props} />} />
          <Route
            exact
            path="/contact"
            render={(props) => <Contact {...props} />}
          />
          <Route
            exact
            path="/support"
            render={(props) => <Support {...props} />}
          />
          <Route exact path="/login" render={(props) => <Login {...props} />} />
          <Route
            exact
            path="/register"
            render={(props) => <Register {...props} />}
          />
          <Route path="/product" render={(props) => <ItemInfo {...props} />} />
        </Switch>
        {false ? <Footer></Footer> : null}
        <AddProduct></AddProduct>
      </div>
    </>
  );
}
