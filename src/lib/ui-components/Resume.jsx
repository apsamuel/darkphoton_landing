import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import ListSubheader from "@material-ui/core/ListSubheader";
import InfoIcon from "@material-ui/icons/Info";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Paper from "@material-ui/core/Paper";
import { tileData } from "./constants";
import * as Colors from "@material-ui/core/colors/";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    overflow: "hidden",
    flex: 1,
    // width: "100vh",
    // height: "100vh",
    // margin: "100px auto",
    backgroundColor: Colors.green[700].toString(),
    borderRadius: "5px",
    minHeight: "500px"
  },
  leftSideStyles: {
    position: "relative",
    //minHeight: "75vh",
    //width: "100px",
    backgroundColor: "red"
  },
  rightSideStyles: {
    position: "relative",
    backgroundColor: "blue"
  },
  paperStyles: {
    borderRadius: "15px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
    flex: 1,
    height: null,
    //    width: "800px",
    //    width: '100%',
    container: true,
    item: true,
    elevation: 5,
    //  padding: "20px",
    boxShadow: "0 3px 5px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: Colors.blueGrey[900],
    margin: "10px"
  },
  button: {
    backgroundColor: "blue",
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "black"
    }
  },
  gridStyles: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
    //    width: "550px",
    //    height: "450px"
  },
  gridItemStyles: {
    flex: 1,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  typographyStyles: {
    flex: 1,
    fontWeight: 5
  },
  imageStyles: {
    borderRadius: "5px"
  },
  iconStyles: {
    color: "rgba(255, 255, 255, 0.54)"
  }
}));

const Resume = () => {
  //export default function Moments() {
  const classes = useStyles();

  return (
    <Grid item container className={classes.root} direction="row" spacing={1}>
      <Grid item className={classes.leftSideStyles} xs>
        <Paper>Left Side</Paper>
      </Grid>
      <Grid item className={classes.rightSideStyles} xs={10}>
        <Paper>Right Side</Paper>
      </Grid>
    </Grid>
  );
};

export default withRouter(Resume);
