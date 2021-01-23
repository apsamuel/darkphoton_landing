import "./App.css";

import { Grid } from "@material-ui/core";
import Header from "./Header";

import { makeStyles } from "@material-ui/core/styles";

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
        <Grid item spacing={5} xs={0} sm={2} />
        <Grid item spacing={5} xs={12} sm={8}>
          Content
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
