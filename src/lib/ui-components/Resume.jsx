import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { CardMedia } from "@material-ui/core";
import { Paper } from "@material-ui/core";
//import Paper from "@material-ui/core/Paper";

import IMG_0308_crop from "./images/IMG_0308_crop.jpg";
import DSCN0861 from "./images/DSCN0861.jpeg";
import * as Colors from "@material-ui/core/colors/";
import {
  withRouter,
  Link as RouterLink,
  Switch,
  Route
} from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import WorkIcon from "@material-ui/icons/Work";

import InfoIcon from "@material-ui/icons/Info";
import SchoolIcon from "@material-ui/icons/School";
import ReplayIcon from "@material-ui/icons/Replay";
import FlareIcon from "@material-ui/icons/Flare";
import GitHubIcon from "@material-ui/icons/GitHub";

import clsx from "clsx";
//import * as Colors from "@material-ui/core/colors/";
//
const drawerWidth = 220;
const appBarHeight = 65;
const footerHeight = 65;
//const resumeContentElement = document.getElementById("resumeContent");
//const resumeContentElementHeight = window.getComputedStyle(resumeContentElement)
// .height;//
//const resumeContentElementWidth = window.getComputedStyle(resumeContentElement)
// .width;
//console.log("height: " + resumeContentElementHeight);
//console.log("width: " + resumeContentElementWidth);
//console.log(currentContentHeight)
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    top: `calc(${appBarHeight}px + 20px)`,
    //flexWrap: "nowrap",
    flexDirection: "row",
    //justifyContent: "space-between",
    alignItems: "center",
    justifyContent: "center",
    //overflow: "hidden",
    position: "absolute",
    //minHeight: "75vh",
    minWidth: "75vw",
    minHeight: `calc(50vh -  ${appBarHeight}px + ${footerHeight}px)`,
    flex: 3,
    backgroundColor: Colors.yellow[700].toString(),
    borderRadius: "5px"
    //minHeight: "500px"
  },
  drawerContainer: {
    overflow: "auto",
    flexGrow: 1,
    flexDirection: "column"
    //backgroundColor: "red"
    //position: "absolute"
  },
  contentContainer: {
    overflow: "auto",
    flexGrow: 1,
    borderRadius: "15px",
    //left: "80px",
    top: `calc(20px + ${appBarHeight}px)`,
    //botton: "10px",
    minHeight: "60vh",
    //padding: "5px",
    //left: `calc(1px + ${drawerWidth}px)`,
    //minWidth: `calc(85vw - 25vw)`,
    //marginLeft: `calc(${drawerWidth}px + 20)`,
    width: `calc(100vh - ${drawerWidth}px)`,
    flexDirection: "row",
    position: "absolute",
    backgroundColor: Colors.grey[700],
    alignItems: "center"
  },
  appBar: {
    //color: "primary",
    height: appBarHeight,
    zIndex: theme.zIndex.drawer + 1,
    position: "absolute",
    backgroundColor: Colors.grey[800]
    //color: "black"
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    flexGrow: 3,
    //height: "50%",
    left: "0"
  },
  drawerPaper: {
    position: "absolute",
    width: drawerWidth,
    maxHeight: "40vh"
  },
  drawerOpen: {
    //position: "relative",
    //minHeight: "75vh",
    //left: "25px",
    width: drawerWidth,
    backgroundColor: Colors.grey[900].toString(),
    //position: "relative",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    backgroundColor: Colors.grey[900].toString(),
    position: "absolute",
    //left: "25px",
    height: "100%",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    left: "20px"
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
  dynamic: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    position: "absolute",
    flexGrow: 3,
    flexDirection: "row",
    flexShrink: 0,
    padding: theme.spacing(3)
    //backgroundColor: "black"
  },
  cardStyles: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    //padding: 5,
    flex: 5,
    //width: 500,
    //height: 400,
    maxWidth: 1200,
    boxShadow: "0 5px 5px 0 rgba(0, 0, 0, 0.9)",
    //color: "white",
    backgroundColor: Colors.grey[900].toString(),
    borderRadius: "25px",
    padding: theme.spacing(1)
  },
  imgStyles: {
    height: "450px",
    width: "450px"
  }
}));

const Resume = () => {
  //export default function Moments() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const ResumeHomeLinkBehaviour = React.forwardRef((props, ref) => (
    <RouterLink ref={ref} to="/resume" {...props} />
  ));

  const ResumeInfoLinkBehaviour = React.forwardRef((props, ref) => (
    <RouterLink ref={ref} to="/resume/info" {...props} />
  ));

  function AboutMe() {
    return (
      <div className={classes.dynamic}>
        <Card className={classes.cardStyles}>
          <CardHeader
            title="IT Solutions Consulant"
            subheader="DevOps Engineer specializing in Containerized & Cloud Infrastructures"
            avatar={<Avatar src={DSCN0861} />}
          />
          <CardMedia
            component="img"
            className={classes.imgStyles}
            src={IMG_0308_crop}
          />
          <CardContent>
            <Typography variant="body2">
              Gracefully moving through the teenage years of my IT experience
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }

  function Test() {
    return (
      <div className={classes.test}>
        <Paper
          style={{
            flex: 1,
            backgroundColor: "purple",
            margin: "30px 0 30px 0"
          }}
        >
          <Typography variant="h3">Hello World</Typography>
        </Paper>

        <Divider />

        <Paper
          style={{
            flex: 1,
            backgroundColor: "orange",
            margin: "30px 0 30px 0"
          }}
        >
          <Typography variant="subtitle1">Hey There!</Typography>
        </Paper>
      </div>
    );
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* Tool Bar to left */}
      DRAWER Container
      <AppBar
        id="resumeAppBar"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            edge="start"
            component={ResumeHomeLinkBehaviour}
            to="/resume"
          >
            <ReplayIcon />
          </IconButton>
          <Typography variant="h6">Aaron P. Samuel</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
        variant="permanent"
      >
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
        <List>
          <ListItem
            button
            component={ResumeInfoLinkBehaviour}
            to="/resume/info"
          >
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About Me" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <WorkIcon />
            </ListItemIcon>
            <ListItemText primary="Job History" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary="Education" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <FlareIcon />
            </ListItemIcon>
            <ListItemText primary="Interests" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <GitHubIcon />
            </ListItemIcon>
            <ListItemText primary="Social" />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      {/* Content Box to right */}
      <div id="resumeContent" className={classes.contentContainer}>
        <Switch>
          <Route exact path="/resume">
            <Test />
          </Route>
          <Route path="/resume/info">
            <AboutMe />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default withRouter(Resume);
