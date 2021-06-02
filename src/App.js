import React from "react";
import "./App.css";
import * as Colors from "@material-ui/core/colors/";
import Header from "./lib/ui-components/Header";
import Footer from "./lib/ui-components/Footer";
import FeaturedContent from "./lib/ui-components/FeaturedContent";
import Moments from "./lib/ui-components/Moments";
import Resume from "./lib/ui-components/Resume";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  makeStyles,
  useTheme,
  // createMuiTheme,
  // ThemeProvider,
  // getThemeProps,
} from "@material-ui/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const useStyles = makeStyles((theme) => {
  console.log(theme); // Here palette includes the new palette.
  return {
    // The top level container, should be like the page but basically empty
    root: {
      color: theme.palette.primary[400],
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      flexFlow: "column wrap",
      alignItems: "center",
      justifyContent: "space-around",
    },
    // The page container ((page components are within this Div))
    pageStyles: {
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      flexFlow: "column wrap",
      alignItems: "center",
      justifyContent: "space-between",
      minHeight: "100vh",
      minWidth: "100vw",
      backgroundColor: "#ffffff",
    },
    // The header container
    containerHeaderStyles: {
      backgroundColor: Colors.grey[900].toString(),
      display: "flex",
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "15px",
      minWidth: "100vw",
      maxWidth: "100vw",
      minHeight: "10vh",
      maxHeight: "10vh",
      //margin: "auto 0",
      border: "1px solid black",
      //offset: theme.mixins.toolbar,
      margin: "5px",
      //minWidth: "`calc(100vh - 240px)`" //
    },
    // The content container
    containerContentStyles: {
      padding: 1,
      margin: "5px",
      display: "flex",
      border: "1px solid black",
      flex: 3,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      alignContent: "center",
      minHeight: "85vh",
      backgroundColor: Colors.grey[900].toString(),
      position: "relative",
      borderRadius: "15px",
      minWidth: "100vw",
      maxWidth: "100vw",
      offset: theme.mixins.toolbar,
    },
    // The footer container
    containerFooterStyles: {
      backgroundColor: Colors.grey[900].toString(),
      display: "flex",
      flex: 1,
      flexDirection: "column",
      border: "1px solid black",
      position: "relative",
      alignItems: "center",
      alignContent: "center",
      justifyContent: "center",
      borderRadius: "15px",
      minHeight: "10vh",
      maxHeight: "10vh",
      minWidth: "100vw",
      maxWidth: "100vw",
      margin: "5px",
    },
  };
});

function App() {
  const classes = useStyles();

  function About() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }

  function Services() {
    return (
      <div>
        <h2>Services</h2>
      </div>
    );
  }

  function DaButterz() {
    return (
      <div>
        <h2>Butters</h2>
      </div>
    );
  }

  return (
    <Router>
      {/* All content is rendered within this container */}

      <CssBaseline />

      {/*  Header Content is rendered within this nested container item  */}

      {/* Primary Content is rendered within this nested container component in rows */}

      <div className={classes.root}>
        {/*  Main Content is routed by Router within this nested container component item */}
        <div className={classes.pageStyles}>
          <div className={classes.containerHeaderStyles}>
            <Header />
          </div>
          <div
            className={classes.containerContentStyles}
            //classes={classes.offset}
          >
            <Switch>
              <Route exact path="/">
                <FeaturedContent />
              </Route>
            </Switch>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
            </Switch>
            <Switch>
              <Route path="/services">
                <Services />
              </Route>
            </Switch>
            <Switch>
              <Route path="/moments">
                <Moments />
              </Route>
            </Switch>
            <Switch>
              <Route path="/resume">
                <Resume />
              </Route>
            </Switch>
            <Switch>
              <Route path="/dabuttaz">
                <DaButterz />
              </Route>
            </Switch>
          </div>

          {/* end Primary Content  */}

          {/* Footer Content is rendered within the main container item */}

          <div className={classes.containerFooterStyles}>
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
