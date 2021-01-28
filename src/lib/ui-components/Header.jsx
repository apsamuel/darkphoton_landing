import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import InputBase from "@material-ui/core/InputBase";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import * as Colors from "@material-ui/core/colors/";
import Paper from "@material-ui/core/Paper";

//import { MemoryRouter as Router } from "react-router";
import { withRouter, Link as RouterLink } from "react-router-dom";
//import { Link as RouterLink } from "react-router-dom";

//console.log('hello')

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButtonStyles: {
    marginRight: theme.spacing(2)
  },
  titleStyles: {
    flexGrow: 1,
    fontSize: 20,
    fontFamily: "Roboto",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  searchStyles: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIconStyles: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRootStyles: {
    color: "inherit"
  },
  inputInputStyles: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch"
      }
    }
  },
  buttonStyles: {
    color: "inherit"
  },
  buttonTextStyles: {
    color: "rgb(255,255,255)",
    fontSize: 12
  },
  typographyStyles: {
    flex: 1
  },
  headerStyles: {
    backgroundColor: Colors.purple[700].toString(),
    width: "100%",
    height: "70px",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    borderRadius: "25px"
  }
}));

const Header = () => {
  const classes = useStyles();

  const HomeLinkBehaviour = React.forwardRef((props, ref) => (
    <RouterLink ref={ref} to="/" {...props} />
  ));

  const ServicesLinkBehaviour = React.forwardRef((props, ref) => (
    <RouterLink ref={ref} to="/services" {...props} />
  ));

  const MomentsLinkBehaviour = React.forwardRef((props, ref) => (
    <RouterLink ref={ref} to="/moments" {...props} />
  ));

  const ResumeLinkBehaviour = React.forwardRef((props, ref) => (
    <RouterLink ref={ref} to="/resume" {...props} />
  ));

  const DaButterzLinkBehaviour = React.forwardRef((props, ref) => (
    <RouterLink ref={ref} to="/dabuttaz" {...props} />
  ));

  return (
    /* Landing Page Bar */
    <AppBar position="static" className={classes.headerStyles}>
      <Toolbar>
        {/*  Icon Button TODO: make drawer */}
        <IconButton
          edge="start"
          className={classes.menuButtonStyles}
          color="inherit"
          aria-label="open drawer"
          component={HomeLinkBehaviour}
          to="/"
        >
          <HomeIcon />
        </IconButton>

        {/*  Search Input  Div */}
        <div className={classes.searchStyles}>
          <div className={classes.searchIconStyles}>
            <SearchIcon />
          </div>

          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRootStyles,
              input: classes.inputInputStyles
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>

        {/*  Page Title Div */}
        <div style={{ flex: 1 }}>
          <Typography className={classes.titleStyles}>
            Dark Photon Consultation LLC {"\u00AE"}
          </Typography>
        </div>

        <div className={classes.buttonStyles}>
          <Button
            variant="outlined"
            component={ServicesLinkBehaviour}
            to="/services"
          >
            <Typography className={classes.buttonTextStyles}>
              Services
            </Typography>
          </Button>

          <Button
            variant="outlined"
            component={MomentsLinkBehaviour}
            to="/moments"
          >
            <Typography className={classes.buttonTextStyles}>
              Moments
            </Typography>
          </Button>

          <Button
            variant="outlined"
            component={ResumeLinkBehaviour}
            to="/resume"
          >
            <Typography className={classes.buttonTextStyles}>Résumé</Typography>
          </Button>

          <Button
            variant="outlined"
            component={DaButterzLinkBehaviour}
            to="/dabuttaz"
          >
            <Typography className={classes.buttonTextStyles}>
              Da Butterz
            </Typography>
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Header);
