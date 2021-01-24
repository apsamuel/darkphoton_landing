import "./App.css";

import { Grid } from "@material-ui/core";
import Header from "./lib/ui-components/Header";
import Home from "./lib/ui-components/Home";
import { makeStyles } from "@material-ui/styles";

const pallette = {
  paper: {
    gray: "#363945"
  }
};
const useStyles = makeStyles({
  container: {
    backgroundColor: pallette.paper.gray,
    padding: 10
  },
  item: {
    backgroundColor: pallette.paper.gray
  }
});

function App() {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={5}
      className={classes.container}
      direction="column"
    >
      <Grid item space={10}>
        <Header />
      </Grid>
      <Grid item container spacing={5} className={classes.item}>
        <Grid item xs={1} sm={2} />
        <Grid item xs={12} sm={8}>
          Content
          <Home />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
