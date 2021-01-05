import { Grid, makeStyles, Typography, Button, Paper } from "@material-ui/core";
import React from "react";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    "& .MuiTypography-h2": {
      fontWeight: "bold",
      margin: `${theme.spacing(2)}px 0`,
    },
    "@media (max-width:600px)": {
      padding: theme.spacing(3),
      "& .MuiTypography-h2": {
        fontSize: "2rem",
      },
      "& .MuiTypography-h6": {
        textAlign: "justify",
        fontSize: "1rem",
      },
    },
  },
  button: {
    padding: "16px 50px",
    "&:last-child": {
      margin: "10px auto",
    },
    "@media (min-width:600px)": {
      "&:last-child": {
        margin: "0 10px",
      },
    },
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.light,
    },
  },
}));

const Main = () => {
  const classes = useStyles();
  return (
    <Paper component="section" elevation={0}>
      <Grid
        container
        className={classes.root}
        alignItems="center"
        justify="center"
      >
        <Grid item lg={8}>
          <Typography
            variant="h4"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            Hello{" "}
            <span role="img" aria-label="emoji">
              ✋,
            </span>{" "}
            I'm
          </Typography>
          <Typography
            variant="h2"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-easing="ease-in-out"
          >
            Ali Abdulsamad Tolulope
          </Typography>
          <Typography
            variant="h6"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-delay="250"
            data-aos-easing="linear"
          >
            <em>
              I'm a Nigerian based front-end developer building user-friendly
              client-side web applications to meet customer's requirement.
            </em>
          </Typography>
          <div style={{ margin: "15px auto" }}>
            <Button
              variant="contained"
              size="large"
              className={classes.button}
              color="primary"
              href="mailto:aliabdulsamad15@gmail.com"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="250"
              data-aos-easing="linear"
              endIcon={<MailOutlineIcon />}
            >
              Hire Me
            </Button>
            <Button
              variant="outlined"
              size="large"
              className={classes.button}
              color="primary"
              href="#contact"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="250"
              data-aos-easing="linear"
              endIcon={<ArrowRightAltIcon />}
            >
              Get in Touch
            </Button>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Main;

// {/* <div className="container min-100 d-flex align-item-center">
//       <div className="row align-items-center">
//         <div className="col-md-10 mx-auto py-md-3">
//           <h4 className="p" data-aos="zoom-in-up" data-aos-duration="1000">
//             Hello{" "}
//             <span role="img" aria-label="emoji">
//               {" "}
//               ✋,
//             </span>
//             I'm <br />
//           </h4>
//           <h1
//             className="display-3 font-weight-bold headline"
//             data-aos="zoom-in-up"
//             data-aos-duration="1000"
//             data-aos-delay="200"
//             data-aos-easing="ease-in-out"
//           >
//             <strong> Ali Abdulsamad Tolulope</strong>
//           </h1>
//           <h5
//             className="py-3 text-justify p"
//             data-aos="zoom-in-up"
//             data-aos-duration="1000"
//             data-aos-delay="250"
//             data-aos-easing="linear"
//           >
//             <em>
//               I'm a Nigerian based front-end developer building user-friendly
//               client-side web applications to meet customer's requirement.
//             </em>
//           </h5>
//           <a href="mailto:aliabdulsamad15@gmail.com">
//             <button
//               className="btn btn-lg btn-orange px-3 px-md-5 py-2 py-md-3 font-weight-bold my-2 mr-2"
//               data-aos="fade-up"
//               data-aos-duration="800"
//               // data-aos-delay="250"
//               data-aos-easing="linear"
//             >
//               Hire Me
//             </button>
//           </a>
//           <a href="#contact">
//             <button
//               className="btn btn-lg btn-outline-orange px-3 px-md-5 py-2 py-md-3  font-weight-bold my-2 mr-2"
//               data-aos="fade-up"
//               data-aos-duration="1000"
//               data-aos-delay="250"
//               data-aos-easing="linear"
//             >
//               Get in Touch
//             </button>
//           </a>
//         </div>
//       </div>
//     </div> */}
