import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
// Components

import Landing from "./components/Landing";

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
    <div className={classes.root}>
      <Landing></Landing>
    </div>
  );
}
