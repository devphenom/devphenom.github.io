import {
  Box,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: `${theme.spacing(3)}px auto`,
    margin: `${theme.spacing(3)}px auto`,
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
    },
    "& .MuiTypography-h3": {
      fontWeight: "bold",
    },
    "& .underline": {
      height: "3px",
      width: "90px",
      backgroundColor: "#ff8e3c",
    },
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <Paper
      component="section"
      elevation={0}
      className={classes.root}
      id="contact"
    >
      <Grid container alignItems="center" justify="center">
        <Grid item lg={10} container alignItems="flex-end">
          <Grid item md={6}>
            <Typography variant="h3">Contact Me</Typography>
            <Box component="div" className="underline"></Box>
          </Grid>
          <Grid item md={6}>
            {/* Mail Icon */}
            <IconButton
              aria-label="external link"
              className=""
              href="mailto:aliabdulsamad15@gmail.com"
              target="_blank"
            >
              <MailIcon fontSize="large" color="primary" />
            </IconButton>
            {/* Github Icon */}
            <IconButton
              aria-label="external link"
              href="https://www.github.com/devphenom"
              target="_blank"
            >
              <GitHubIcon fontSize="large" color="primary" />
            </IconButton>
            {/* Linkedin Icon */}
            <IconButton
              aria-label="external link"
              href="https://www.linkedin.com/in/devphenom"
              target="_blank"
            >
              <LinkedInIcon fontSize="large" color="primary" />
            </IconButton>
            {/* Twitter Icon */}
            <IconButton
              aria-label="external link"
              href="https://www.twitter.com/dev_phenom"
              target="_blank"
            >
              <TwitterIcon fontSize="large" color="primary" />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Contact;
