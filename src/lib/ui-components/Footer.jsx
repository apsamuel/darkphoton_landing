import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import InfoIcon from "@material-ui/icons/Info";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import PolicyIcon from "@material-ui/icons/Policy";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import * as Colors from "@material-ui/core/colors/";

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: Colors.blueGrey[900].toString()
  }
});

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction label="Info" value="info" icon={<InfoIcon />} />
      <BottomNavigationAction
        label="Contact"
        value="contact"
        icon={<ContactSupportIcon />}
      />
      <BottomNavigationAction
        label="Philosophy"
        value="philosophy"
        icon={<PolicyIcon />}
      />
      <BottomNavigationAction
        label="Twitter"
        value="twitter"
        icon={<TwitterIcon />}
      />
      <BottomNavigationAction
        label="LinkedIn"
        value="linkedin"
        icon={<LinkedInIcon />}
      />
    </BottomNavigation>
  );
}
