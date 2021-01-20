import { Grid, IconButton, makeStyles } from "@material-ui/core";
import React from "react";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: 99999999,
    opacity: 0.5,
    backgroundColor: theme.palette.primary.main,
    borderRadius: "50px",
    cursor: "pointer",
    "&:hover": {
      opacity: 1,
    },
  },
}));

const DarkMode = ({ setdarkmode, darkmode }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <IconButton
        aria-label="darkmode button"
        className=""
        onClick={() => setdarkmode(!darkmode)}
      >
        {darkmode ? <WbSunnyIcon /> : <NightsStayIcon />}
      </IconButton>
    </Grid>
  );
};

export default DarkMode;
