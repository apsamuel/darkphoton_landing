import React from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Avatar, IconButton, CardMedia } from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";

import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import * as Colors from "@material-ui/core/colors/";

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: Colors.blueGrey[900].toString()
  }
});

export default function CardPlay() {
  const classes = useStyles();

  return (
    <Paper elevation={5}>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar src="https://i1.sndcdn.com/avatars-000618297027-7xzlrl-t500x500.jpg" />
          }
          action={
            <IconButton aria-label="settings">
              <ShareIcon />
            </IconButton>
          }
          title="Covid 19 Dashboard"
          subheader="An online tool which tracks global Covid 19 statistics"
        />
        <CardMedia
          component="iframe"
          style={{ height: "350px" }}
          image="https://coronavirus.jhu.edu/map.html"
        />
        <CardContent>
          <Typography variant="body2" component="p">
            okiedokie do..
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Boom</Button>
        </CardActions>
      </Card>
    </Paper>
  );
}
