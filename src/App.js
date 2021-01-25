import "./App.css";
import * as Colors from "@material-ui/core/colors/";
import { Grid } from "@material-ui/core";
import Header from "./lib/ui-components/Header";
import Footer from "./lib/ui-components/Footer";
import FeaturedContent from "./lib/ui-components/FeaturedContent";
//import Moments from "./lib/ui-components/Moments";
//import CardPlay from "./lib/ui-components/CardPlay";

import { makeStyles } from "@material-ui/styles";
import {
  BrowserRouter as Router
  //  Switch,
  //  Route,
  //  Link
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  pageStyles: {
    backgroundColor: "black",
    display: "flex",
    flex: "auto"
  },
  containerHeaderStyles: {
    backgroundColor: Colors.grey[900].toString(),
    padding: 1,
    display: "flex",
    flex: "auto",
    border: "15px solid black"
  },
  containerContentStyles: {
    padding: 5,
    border: "5px solid black",
    margin: 1,
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.grey[900].toString()
  }
}));

//console.log(theme.palette.background.paper)

function App() {
  const classes = useStyles();

  return (
    <Router>
      {/* Primary Grid Container */}
      <div className={classes.pageStyles}>
        <Grid
          container
          spacing={10}
          className={classes.containerHeaderStyles}
          direction="column"
        >
          {/*  Header Content: Grid Item */}
          <Grid item>
            <Header />
          </Grid>

          {/* begin Primary Content: Grid Container Item */}
          <Grid
            item
            container
            spacing={1}
            className={classes.containerContentStyles}
          >
            {/* Spacing: Grid item (inner)*/}

            {/*  Main Content: Grid item (inner) */}
            <Grid item xs={12} sm={12}>
              <FeaturedContent />
            </Grid>

            {/* Spacing: Grid item (inner)
            <Grid item xs={12} sm={12}></Grid>
            */}

            {/* Footer Content: Grid item (inner) */}
            <Grid item xs={12} sm={12}>
              <Footer />
            </Grid>
          </Grid>
          {/* end Primary Content  */}
        </Grid>
      </div>
    </Router>
  );
}

export default App;
