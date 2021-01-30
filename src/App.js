import React from "react";
import "./App.css";
import * as Colors from "@material-ui/core/colors/";
//import { Grid } from "@material-ui/core";
import Header from "./lib/ui-components/Header";
import Footer from "./lib/ui-components/Footer";
import FeaturedContent from "./lib/ui-components/FeaturedContent";
import Moments from "./lib/ui-components/Moments";
import Resume from "./lib/ui-components/Resume";
//import CardPlay from "./lib/ui-components/CardPlay";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    //flexWrap: "wrap",
    //justifyContent: "space-around",
    //overflow: "hidden",
    backgroundColor: "#212121"
  },
  body: {},
  pageStyles: {
    //backgroundColor: "black",
    display: "flex",
    flex: 2,
    flexDirection: "column",
    minHeight: "100vh",
    minWidth: "100vh",
    //flexWrap: "wrap",
    backgroundColor: "#212121"
  },
  containerStyles: {
    backgroundColor: Colors.grey[900].toString()
    //display: "flex"
    //flex: 3
    //width: `calc(100% - 240px)`
    //    width: "100vw",
    //height: "100vh",
  },
  containerHeaderStyles: {
    backgroundColor: Colors.grey[900].toString(),
    //padding: 1,
    display: "flex",
    flex: 1,
    flexDirection: "row",
    //flex: "auto",
    border: "1px solid black",
    //position: "relative",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "15px",
    minWidth: "100vh"
    //minHeight: "8vh",
    //maxHeight: "8vh"
    //minWidth: "`calc(100vh - 240px)`" //
    // height: "10vh",
    // width: "100%"
    //    height: "100vh",
  },
  containerFooterStyles: {
    backgroundColor: Colors.grey[900].toString(),
    //padding: 1,
    display: "flex",
    flex: 1,
    //flexGrow: 1,
    //flexShrink: 1,
    flexDirection: "column",
    border: "1px solid black",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "15px",
    //minHeight: "8vh",
    //maxHeight: "8vh",
    minWidth: "100vh"
    //height: "10vh"
  },
  containerContentStyles: {
    padding: 0,
    margin: 0,
    display: "flex",
    flex: 3,
    flexGrow: 3,
    flexShrink: 3,
    flexDirection: "column",
    //flexGrow: 3,
    //flex: 1,
    alignItems: "center",
    justifyContent: "center",
    minHeight: "85vh",
    //maxHeight: "85vh",
    // border: "5px solid black",
    backgroundColor: Colors.grey[900].toString(),
    position: "relative",
    borderRadius: "15px",
    minWidth: "100vh"

    //    height: "100px",
    //    width: "500px"
  }
}));

//console.log(theme.palette.background.paper)

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

      {/*  Main Content is routed by Router within this nested container component item */}
      <div className={classes.pageStyles}>
        <div className={classes.containerHeaderStyles}>
          <Header />
        </div>
        <div className={classes.containerContentStyles}>
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
    </Router>
  );
}

export default App;
