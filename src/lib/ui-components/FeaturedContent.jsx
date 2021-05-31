//import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Avatar, IconButton, CardMedia } from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import { cardList } from "./constants";
import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import * as Colors from "@material-ui/core/colors/";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles(theme => {
  console.log(theme); // Here palette includes the new palette.
  return {
  spacing: {
    container: 2
  },
  root: {
    color: theme.palette.primary[400]
  },
  offset: theme.mixins.toolbar,
  button: {
    backgroundColor: "blue",
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "black"
    }
  },
  gridStyles: {
    display: "flex",
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    flexFlow: "flex-start",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "100%",
    position: "relative",
    marginTop: "20vh",
    marginBottom: "15vh",
  },
  gridItemStyles: {
    display: "flex",
    flexGrow: 1,
    flexShrink: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    //flex: 1,
    //flexGrow: 1,
    //flexShrink: 1,
    flexWrap: "wrap",
    position: "relative"
  },
  paperStyles: {
    display: "flex",
    borderRadius: "25px",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "column",
    //display: "flex",
    //flexWrap: "nowrap",
    //flexDirection: "inherit",
    //flex: "auto",
    //elevation: 5,
    padding: "5px",
    boxShadow: "0 3px 5px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: Colors.purple[700]

  },
  cardStyles: {
    display: "flex",
    //flexWrap: "nowrap",
    order: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    //padding: 5,
    flex: 1,
    //width: 600,
    //height: 400,
    //maxWidth: 1200,
    boxShadow: "0 5px 5px 0 rgba(0, 0, 0, 0.9)",
    backgroundColor: Colors.grey[900].toString(),
    borderRadius: "25px"
  },
  gridspaceStyles: {
    flexGrow: 1,
    flexWrap: "wrap"
  },

  typographyStyles: {
    flex: 1,
    fontWeight: 5
  },
  };
});

// const useStyles = makeStyles((theme) => ({
//   root: {
//     //marginTop: "75px",
//     //marginBottom: "65px",
//     //marginLeft: "5px",
//     // marginRight: "5px",
//     // display: "flex",
//     // flexDirection: "column",
//     // flexWrap: "nowrap",
//     // maxWidth: "100vh",
//     //flexDirection: "inherit",
//     //justifyContent: "space-around",
//     //overflow: "hidden",
//     //position: "relative"
//   },
//   paperStyles: {
//     borderRadius: "25px",
//     position: "relative",
//     justifyContent: "center",
//     alignItems: "center",
//     //display: "flex",
//     //flexWrap: "nowrap",
//     //flexDirection: "inherit",
//     //flex: "auto",
//     //elevation: 5,
//     padding: "5px",
//     boxShadow: "0 3px 5px 0 rgba(0, 0, 0, 0.3)",
//     backgroundColor: Colors.purple[700]

//   },
//   button: {
//     backgroundColor: "blue",
//     [theme.breakpoints.up("sm")]: {
//       backgroundColor: "black"
//     }
//   },
//   gridStyles: {
//     display: "flex",
//     flex: 1,
//     flexWrap: "nowrap",
//     flexDirection: "column",
//     maxWidth: "100vh",
//     position: "relative",
//   },
//   gridItemStyles: {
//     display: "flex",
//     flex: 1,
//     flexGrow: 1,
//     flexShrink: 1,
//     //flexWrap: "nowrap",
//     //position: "relative"
//   },
//   gridspaceStyles: {
//     flexGrow: 1,
//     flexWrap: "wrap"
//   },
//   cardStyles: {
//     display: "inline-table",
//     //flexWrap: "nowrap",
//     justifyContent: "center",
//     alignItems: "center",
//     overflow: "hidden",

//     //padding: 5,
//     flex: "auto",
//     width: 600,
//     height: 400,
//     maxWidth: 1200,
//     boxShadow: "0 5px 5px 0 rgba(0, 0, 0, 0.9)",
//     backgroundColor: Colors.grey[900].toString(),
//     borderRadius: "25px"
//   },
//   typographyStyles: {
//     flex: 1,
//     fontWeight: 5
//   }
// }));

const FeaturedContent = () => {

  // Testing using makeStyles instead 

  // 
  //console.log(cardList[0].testing);
  //console.log(theme)
  const classes = useStyles();
  //create gridItems (cards) from constants data
  const gridItems = cardList.map((item, index) => (
    <Grid item className={classes.gridItemStyles}  key={index}>
      <Paper className={classes.paperStyles} >
        <Card className={classes.cardStyles}>
          <CardHeader
            avatar={<Avatar src={item.avatar} />}
            action={
              <IconButton aria-label="settings">
                <ShareIcon />
              </IconButton>
            }
            title={item.title}
            subheader={item.subtitle}
          />
          <CardMedia
            component={item.component}
            style={{ height: "250px" }}
            src={item.src}
          />
          <CardContent>
            <Typography
              className={classes.typographyStyles}
              variant="body2"
              component="p"
            >
              {item.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Boom</Button>
          </CardActions>
        </Card>
      </Paper>
    </Grid>
  ));

  return (
    //<div className={classes.root}>
    <Grid
      container
      className={classes.gridStyles}
      direction="column"
      spacing={2}
 
    >
      {/* { <Grid item xs={10} sm={10}></Grid> } */}
      {gridItems}
      {/* { <Grid item xs={12} sm={12}></Grid> } */}
    </Grid>
    //</div>
  );
};

export default withRouter(FeaturedContent);
