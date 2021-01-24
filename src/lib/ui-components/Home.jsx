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

import Button from "@material-ui/core/Button";
//import Colors  from "@material-ui/styles/colors";
const pallette = {
  paper: {
    purple: "#6B5B95"
  }
};

const useStyles = makeStyles(() => ({
  cardStyles: {
    maxWidth: 345,
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: "#fafafa"
  },
  typographyStyles: {
    flex: 1
  },
  headerStyles: {
    backgroundColor: pallette.paper.purple
  }
}));

const Home = () => {
  console.log(cardList[0].testing);
  const classes = useStyles();
  //create gridItems (cards) from constants data
  const gridItems = cardList.map((item) => (
    <Grid item xs={12} sm={4}>
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
          style={{ height: "350px" }}
          image={item.imageURL}
        />
        <CardContent>
          <Typography variant="body2" component="p">
            {item.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Boom</Button>
        </CardActions>
      </Card>
    </Grid>
  ));

  return (
    <Grid container spacing={10}>
      {gridItems}
    </Grid>
  );
};

export default Home;
