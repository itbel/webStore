import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Drawer, Button } from "@material-ui/core";
import { withRouter, Link } from "react-router-dom";
import logo from "../media/logo_transparent.png";
import { List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import IndeterminateCheckBoxOutlinedIcon from "@material-ui/icons/IndeterminateCheckBoxOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingBottom: "60px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1,
    },
  },
  headerOptions: {
    fontSize: "1.2em",
    display: "flex",
    flex: 1,
    justifyContent: "center",
  },
  list: {
    width: 250,
  },
}));
const shoppingCart = {
  items: [
    { name: "Roku Express", price: 39.99 },
    { name: "Fire Stick 4K", price: 69.99 },
    { name: "Fire TV Cube", price: 139.99 },
    { name: "Fire TV Stick", price: 49.99 },
    { name: "Chromecast Ultra", price: 89.99 },
    { name: "Kindle", price: 119.99 },
    { name: "Kindle Paperwhite", price: 139.99 },
  ],
};
const Nav = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const nav = ["home", "sale", "about", "contact"];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <div className={classes.root}>
      <Drawer
        anchor={"left"}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <List>
          {nav.map((text, index) => (
            <Link
              style={{
                textDecoration: "none",
                color: "black",
              }}
              onClick={() => {
                setOpen(false);
              }}
              to={text === "home" ? "/" : `/${text}`}
            >
              <ListItem button key={text}>
                <ListItemText style={{ width: "200px", textAlign: "center" }}>
                  <b>{text.toUpperCase()}</b>
                </ListItemText>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <Drawer
        anchor={"right"}
        open={openCart}
        onClose={() => {
          setOpenCart(false);
        }}
      >
        <List style={{ height: "100vh" }}>
          {shoppingCart.items.map((item, index) => (
            <Link
              style={{
                textDecoration: "none",
                color: "black",
              }}
              onClick={() => {
                setOpen(false);
              }}
            >
              <ListItem button key={item.name}>
                <ListItemText
                  primary={item.name.toUpperCase()}
                  secondary={`$${item.price}`}
                  style={{ width: "200px", textAlign: "left" }}
                ></ListItemText>
                <ListItemIcon>
                  <IndeterminateCheckBoxOutlinedIcon></IndeterminateCheckBoxOutlinedIcon>
                </ListItemIcon>
              </ListItem>
            </Link>
          ))}
          <ListItem>
            <ListItemText style={{ textAlign: "left" }}>
              <b>
                Total:
                {shoppingCart.items
                  .reduce((sum, item) => {
                    return (sum += item.price);
                  }, 0)
                  .toFixed(2)}
              </b>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <AppBar color="default" position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <img alt="logo" height="50" src={logo}></img>
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <MenuIcon />
              </IconButton>
            </>
          ) : (
            <div className={classes.headerOptions}>
              {nav.map((text, index) => {
                return (
                  <Link
                    style={{
                      color: "black",
                      textDecoration: "none",
                      padding: "16px",
                    }}
                    to={text === "home" ? "/" : `/${text}`}
                  >
                    <b>{text.toUpperCase()}</b>
                  </Link>
                );
              })}
            </div>
          )}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className={classes.menuButton}
            onClick={() => {
              setOpenCart(!openCart);
            }}
          >
            <ShoppingCart></ShoppingCart>
          </IconButton>
          <Button>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Nav);
