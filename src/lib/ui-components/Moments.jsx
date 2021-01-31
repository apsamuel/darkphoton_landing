import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
//import ListSubheader from "@material-ui/core/ListSubheader";
//import InfoIcon from "@material-ui/icons/Info";
import StarBorderIcon from "@material-ui/icons/StarBorder";
//import Paper from "@material-ui/core/Paper";
import { tileData } from "./constants";
import * as Colors from "@material-ui/core/colors/";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Colors.purple[700].toString(),
    borderRadius: "25px"
  },
  innercontainerStyles: {
    borderRadius: "25px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flex: 1,
    flexWrap: "wrap",
    padding: 3,
    container: true,
    item: true,
    backgroundColor: Colors.blueGrey[900]
  },
  paperStyles: {
    borderRadius: "15px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
    flex: 1,
    height: null,
    width: "800px",
    //    width: '100%',
    container: true,
    item: true,
    elevation: 5,
    padding: "20px",
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
    alignItems: "center",
    width: "550px",
    height: "450px"
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

const Moments = () => {
  //export default function Moments() {
  const classes = useStyles();

  return (
    <GridList
      cellHeight={400}
      spacing={10}
      className={classes.innercontainerStyles}
    >
      {tileData.map((tile) => (
        <GridListTile
          key={tile.img}
          cols={tile.featured ? 2 : 1}
          rows={tile.featured ? 2 : 1}
        >
          <img
            className={classes.imageStyles}
            src={tile.img}
            alt={tile.title}
          />
          <GridListTileBar
            title={tile.title}
            titlePosition="top"
            actionIcon={
              <IconButton
                aria-label={`star ${tile.title}`}
                className={classes.iconStyles}
              >
                <StarBorderIcon />
              </IconButton>
            }
            actionPosition="left"
            className={classes.titleBarStyles}
          />
        </GridListTile>
      ))}
    </GridList>
  );
};

export default withRouter(Moments);
