import "./App.css";
import * as Colors from "@material-ui/core/colors/";
import { Grid } from "@material-ui/core";
import Header from "./lib/ui-components/Header";
import Footer from "./lib/ui-components/Footer";
import FeaturedContent from "./lib/ui-components/FeaturedContent";
import Moments from "./lib/ui-components/Moments";
import Resume from "./lib/ui-components/Resume";
//import CardPlay from "./lib/ui-components/CardPlay";

import { makeStyles } from "@material-ui/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "black"
  },
  pageStyles: {
    //backgroundColor: "black",
    display: "flex",
    flex: "auto"
  },
  containerStyles: {
    backgroundColor: Colors.grey[900].toString(),
    display: "flex",
    flex: "auto",
    //    width: "100vw",
    //    height: "100vh",
    spacing: 0,
    justify: "space-around"
  },
  containerHeaderStyles: {
    backgroundColor: Colors.grey[900].toString(),
    padding: 1,
    display: "flex",
    flex: "auto",
    border: "1px solid black",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "25px"
    // height: "10vh",
    // width: "100%"
    //    height: "100vh",
  },
  containerFooterStyles: {
    backgroundColor: Colors.grey[900].toString(),
    padding: 1,
    display: "flex",
    flex: "auto",
    border: "1px solid black",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "25px"
    //height: "10vh"
  },
  containerContentStyles: {
    padding: 5,
    margin: 1,
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // border: "5px solid black",
    backgroundColor: Colors.grey[900].toString(),
    position: "relative",
    borderRadius: "25px"
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
      <div className={classes.pageStyles}>
        <Grid
          container
          spacing={3}
          className={classes.containerStyles}
          direction="row"
        >
          {/*  Header Content is rendered within this nested container item  */}
          <Grid item container className={classes.containerHeaderStyles}>
            <Grid item xs sm lg md xl>
              <Header />
            </Grid>
          </Grid>

          {/* Primary Content is rendered within this nested container component in rows */}
          <Grid
            item
            container
            spacing={12}
            direction="row"
            className={classes.containerContentStyles}
          >
            {/*  Main Content is routed by Router within this nested container component item */}
            <Grid item xs={10} sm={10} lg={10} md={10} xl={10}>
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
            </Grid>
          </Grid>
          {/* end Primary Content  */}

          {/* Footer Content is rendered within the main container item */}
          <Grid item container className={classes.containerFooterStyles}>
            <Grid item xs>
              <Footer />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Router>
  );
}

export default App;
