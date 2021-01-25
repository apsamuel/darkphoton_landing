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

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    flex: 1
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
    backgroundColor: Colors.purple[700].toString()
  },
  paperStyles: {
    borderRadius: "15px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
    flex: 1,
    height: '423px',
    width: '500px',
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
    alignItems: "center"
  },
  gridItemStyles: {
    flex: 1,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  gridspaceStyles: {
    height: 100,
    width: "80%",
    flex: 1,
    flexWrap: "wrap"
  },
  cardStyles: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    padding: 5,
    flex: 1,
    width: 500,
    height: 400,
    maxWidth: 1200,
    boxShadow: "0 15px 15px 0 rgba(0, 0, 0, 0.9)",
    backgroundColor: Colors.grey[900].toString()
  },
  typographyStyles: {
    flex: 1,
    fontWeight: 5
  }
}));

const FeaturedContent = () => {
  //console.log(cardList[0].testing);
  const classes = useStyles();
  //create gridItems (cards) from constants data
  const gridItems = cardList.map((item, index) => (
    <div classes={classes.root}>
      <Paper
        className={classes.paperStyles}
        key={index}
        style={{ flex: 1 }}
        elevation={5}
      >
        <Grid container className={classes.innercontainerStyles} spacing={5}>
          <Grid
            item
            className={classes.gridItemStyles}
            key={index}
            xs={12}
            sm={12}
            xl={12}
          >
            <Card className={classes.cardStyles}>
              <CardHeader
                avatar={<Avatar src={item.avatarURL} />}
                action={
                  <IconButton aria-label="settings">
                    <ShareIcon />
                  </IconButton>
                }
                title={item.title}
                subheader={item.subtitle}
              />
              <CardMedia
                component="img"
                style={{ height: "250px" }}
                image={item.imageURL}
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
          </Grid>
        </Grid>
      </Paper>
    </div>
  ));

  return (
    <Grid
      container
      className={classes.gridStyles}
      direction="row-reverse"
      justify="flex-start"
      alignItems="center"
      spacing={2}
    >
      <Grid item xs={12} sm={12}></Grid>
      {gridItems}
      <Grid item xs={12} sm={12}></Grid>
    </Grid>
  );
};

export default FeaturedContent;
