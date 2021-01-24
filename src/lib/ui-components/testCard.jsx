import React from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ShareIcon from "@material-ui/icons/Share";
import { Avatar, IconButton, CardMedia } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto"
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

const TestCard = (props) => {
  //console.log(props.imageURL);
  const classes = useStyles();
  //const { title, subtitle, description, avatar, image } = props;
  var testUrl =
    "https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop";
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar src={props.avatarURL} />}
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={props.title}
        subheader={props.subtitle}
      />
      <CardMedia
        component="img"
        style={{ height: "350px" }}
        image={props.imageURL}
      />
      <CardContent>
        <Typography variant="body2" component="p">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Cattack</Button>
      </CardActions>
    </Card>
  );
};

export default TestCard;
