//import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import { cardList } from "./constants"
//import Colors  from "@material-ui/styles/colors";

const pallette = {
  paper: {
    purple: "#6B5B95",
    gray: "#363945"
  }
};

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1
  },
  headerStyles: {
    backgroundColor: pallette.paper.purple
  }
}));

const Home = () => {
  const classes = useStyles();
  return (
    /* Landing Page Bar */
     <div className={classes.headerStyles}>{cardList[0].foo}</div>
  );
};

export default Home;
