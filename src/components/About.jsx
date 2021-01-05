import { Box, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import StackGrid from "./reusable components/StackGrid";
import Images from "../imgs/Img";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: `${theme.spacing(3)}px auto`,
    "& .MuiTypography-h3": {
      fontWeight: "bold",
    },
    "& .MuiTypography-h5": {
      fontWeight: "bold",
      margin: `${theme.spacing(2)}px auto`,
    },
    "& .underline": {
      height: "3px",
      width: "90px",
      backgroundColor: "#ff8e3c",
    },
    "& .makeStyles-about-7": {
      marginTop: theme.spacing(4),
    },
    "& .MuiTypography-paragraph": {
      color: theme.palette.primary.dark,
      opacity: ".8",
    },
  },
  aboutP: {},
  about: {
    padding: `${theme.spacing(3)}px auto`,
  },
}));

const AboutMe = () => {
  const classes = useStyles();
  return (
    <Paper
      component="section"
      elevation={0}
      className={classes.root}
      id="about"
    >
      <Grid container alignItems="center" justify="center">
        <Grid item lg={10}>
          <Grid>
            <Typography
              variant="h3"
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-easing="linear"
            >
              About Me
            </Typography>
            <Box
              component="div"
              className="underline"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="150"
              data-aos-easing="linear"
            ></Box>
            <Grid container className={classes.about}>
              <Grid item lg={7}>
                <Typography
                  paragraph
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  data-aos-easing="linear"
                >
                  I am a Nigerian, a front end web developer, a graphics
                  designer and a cyber security student.
                </Typography>
                <Typography
                  paragraph
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="250"
                  data-aos-easing="linear"
                >
                  I have about 2 years experience working on front end web
                  technologies. I have completed a series of projects as a
                  freelancer.
                </Typography>
                <Typography
                  paragraph
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                  data-aos-easing="linear"
                >
                  In addition to my skills is about 5 years experience in
                  graphics designing with CorelDraw versions and Photoshop CS.
                </Typography>
              </Grid>
              <Grid item xs></Grid>
              <Grid item lg={4}>
                <Typography
                  variant="h5"
                  align="center"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                  data-aos-easing="linear"
                >
                  My Stacks
                </Typography>
                <Grid container>
                  <StackGrid
                    icon="fa fa-html5"
                    text="HTML"
                    delay="100"
                    isIcon
                  />
                  <StackGrid icon="fa fa-css3" text="CSS" delay="200" isIcon />
                  <StackGrid
                    icon="fab fa-js-square"
                    text="JavaScript"
                    delay="300"
                    isIcon
                  />
                  <StackGrid
                    icon="fab fa-bootstrap"
                    text="Bootstrap"
                    delay="400"
                    isIcon
                  />
                  <StackGrid
                    icon="fab fa-react"
                    text="React"
                    delay="500"
                    isIcon
                  />
                </Grid>
                <Typography
                  variant="h5"
                  align="center"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                  data-aos-easing="linear"
                >
                  Additional Skills
                </Typography>
                <Grid container>
                  <StackGrid
                    icon={"fab fa-git-alt"}
                    text="Git"
                    delay="300"
                    isIcon
                  />
                  <StackGrid icon={Images.netlify} text="Netlify" delay="400" />
                  <StackGrid icon={Images.vercel} text="Vercel" delay="500" />
                  <StackGrid
                    icon={Images.materialui}
                    text="Material UI"
                    delay="600"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AboutMe;
