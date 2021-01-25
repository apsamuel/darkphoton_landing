import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import * as Colors from "@material-ui/core/colors/";
const rootElement = document.getElementById("root");
const theme = createMuiTheme({
  root: {
    flexGrow: 1,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: Colors.purple[50].toString()
  },
  pallete: {
    primary: Colors.purple[50].toString(),
    secondary: Colors.grey[900].toString()
  },
  typography: {
    fontFamily: "Roboto",
    subtitle2: {
      fontFamily: "Roboto"
    },
    h1: {
      fontFamily: "Roboto"
    },
    h2: {
      fontFamily: "Roboto"
    },
    h3: {
      fontFamily: "Roboto"
    },
    h4: {
      fontFamily: "Roboto"
    },
    h5: {
      fontFamily: "Roboto"
    },
    h6: {
      fontFamily: "Roboto"
    },
    body1: {
      fontFamily: "Roboto"
    },
    body2: {
      fontFamily: "Roboto"
    },
    button: {
      fontFamily: "Roboto",
      fontSize: 12,
      fontWeight: "bolder"
    },
    caption: {
      fontFamily: "Roboto"
    },
    overline: {
      fontFamily: "Roboto"
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
