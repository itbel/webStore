import React from "react";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

// Components
import Home from "./components/Home";
import Contact from "./components/Contact";
import Support from "./components/Support";
import Nav from "./components/Nav";
import Sale from "./components/Sale";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import ItemInfo from "./components/ItemInfo";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));
export default function App() {
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
          <Route exact path="/sale" render={(props) => <Sale {...props} />} />
          <Route exact path="/login" render={(props) => <Login {...props} />} />
          <Route
            exact
            path="/register"
            render={(props) => <Register {...props} />}
          />
          <Route path="/product" render={(props) => <ItemInfo {...props} />} />
        </Switch>
        <Footer></Footer>
      </div>
    </>
  );
}
