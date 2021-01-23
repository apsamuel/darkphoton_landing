import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import FlareIcon from "@material-ui/icons/Flare";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
//import Colors  from "@material-ui/styles/colors";

const pallette = {
  paper: {
    purple: "#6B5B95"
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

const Header = () => {
  const classes = useStyles();
  return (
    /* Landing Page Bar */
    <AppBar position="static" className={classes.headerStyles}>
      <Toolbar>
        <Grid container spacing={5} direction="row">
          <Grid item>
            <Typography className={classes.typographyStyles}>
              Dark Photon Consulation LLC {"\u00AE"}
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              onClick={() => {
                alert("clicked");
              }}
            >
              Services
            </Button>
          </Grid>

          <Grid item>
            <Button
              variant="outlined"
              onClick={() => {
                alert("clicked");
              }}
            >
              Moments
            </Button>
          </Grid>

          <Grid item>
            <Button
              variant="outlined"
              onClick={() => {
                alert("clicked");
              }}
            >
              Resume
            </Button>
          </Grid>

          <Grid item>
            <Button
              variant="outlined"
              onClick={() => {
                alert("clicked");
              }}
            >
              The Butterz
            </Button>
          </Grid>
        </Grid>
        <FlareIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
