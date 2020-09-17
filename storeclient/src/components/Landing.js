import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import Support from "./Support";
import Nav from "./Nav";
import Cart from "./Cart";
import Footer from "./Footer";
import Login from "./Login";
import Register from "./Register";
import ItemInfo from "./ItemInfo";
import { Route, Switch } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <Nav></Nav>
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
        <Route path="/cart" render={(props) => <Cart {...props} />} />
        <Route path="/product" render={(props) => <ItemInfo {...props} />} />
      </Switch>
      <Footer></Footer>
    </>
  );
};

export default Landing;
