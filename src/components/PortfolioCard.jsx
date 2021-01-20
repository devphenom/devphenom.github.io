import React from "react";
import {
  Grid,
  Icon,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Tags from "./reusable components/Tags";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    margin: theme.spacing(3),
    // "& .MuiTypography-paragraph": {
    //   fontSize: "16px",
    //   color: theme.palette.primary.dark,
    //   opacity: ".8",
    // },
  },
  h2Typo: {
    fontWeight: "bold",
    fontSize: "2.5rem",
    color: theme.palette.primary.dark,
    [theme.breakpoints.down("md")]: {
      fontSize: "2rem",
    },
  },
  container: {
    padding: `${theme.spacing(3)}px auto`,
    margin: `${theme.spacing(8)}px auto`,
  },
  textContainer: {
    padding: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
    },
  },
  imgContainer: {
    padding: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
    },
  },
}));

export default function PortfolioCard(props) {
  const classes = useStyles();
  const { reverse, img, title, link, children, tags } = props;
  return (
    <Grid
      container
      // direction="row-reverse"
      direction={`${reverse ? "row-reverse" : "row"}`}
      alignItems="center"
      classes={{ root: classes.container }}
    >
      <Grid
        item
        md={7}
        data-aos={reverse ? "fade-left" : "fade-right"}
        data-aos-duration="1000"
        data-aos-easing="linear"
      >
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={img} alt="" className="portimg" />
        </a>
      </Grid>
      <Grid item md={5} classes={{ root: classes.textContainer }}>
        <Typography
          variant="h2"
          classes={{ root: classes.h2Typo }}
          data-aos={reverse ? "fade-right" : "fade-left"}
          data-aos-duration="1000"
          data-aos-easing="linear"
        >
          {title}
          <IconButton
            aria-label="external link"
            className=""
            href={link}
            target="_blank"
          >
            <Icon className="fas fa-external-link-alt icon" color="primary" />
          </IconButton>
        </Typography>
        <Typography
          paragraph
          data-aos={reverse ? "fade-right" : "fade-left"}
          data-aos-duration="1200"
          data-aos-easing="linear"
          color="primary.dark"
        >
          {children}
        </Typography>
        <Tags tags={tags} reverse={reverse ? true : false} />
      </Grid>
    </Grid>
  );
}

// export const PortRow = (props) => (
//   <div className="row py-5 align-items-center">{props.children}</div>
// );
// export const PortCard = (props) => (
//   <div className="col-md-5 col-lg-4 mx-auto rounded">{props.children}</div>
// );
// export const PortName = (props) => (
//   <h1
//     className="font-weight-bold portfolio-name py-2 pt-3 headline"
//     data-aos={props.aos.name}
//     data-aos-duration={props.aos.duration}
//     data-aos-delay={props.aos.delay}
//     data-aos-easing={props.aos.easing}
//   >
//     {props.name}{" "}
//     <span>
//       <a href={props.link} target="_blank" rel="noopener noreferrer">
//         <i className="fas fa-external-link-alt ml-3"></i>
//       </a>
//     </span>
//   </h1>
// );

// export const PortText = (props) => (
//   <p
//     className="my-3 p"
//     data-aos={props.aos.name}
//     data-aos-duration={props.aos.duration}
//     data-aos-delay={props.aos.delay}
//     data-aos-easing={props.aos.easing}
//   >
//     {props.children}
//   </p>
// );
// export const PortTag = (props) => (
//   <span
//     className="px-3 py-1 rounded m-2 bg-card"
//     data-aos={props.aos.name}
//     data-aos-duration={props.aos.duration}
//     data-aos-delay={props.aos.delay}
//     data-aos-easing={props.aos.easing}
//   >
//     {props.name}
//   </span>
// );
// export const PortTagContainer = (props) => (
//   <div className="row justify-content-end">{props.children}</div>
// );
// export const PortImageContainer = (props) => (
//   <a
//     href={props.link}
//     target="_blank"
//     rel="noopener noreferrer"
//     className={`col-md-7 ${props.display}`}
//     data-aos={props.aos.name}
//     data-aos-duration={props.aos.duration}
//     data-aos-delay={props.aos.delay}
//     data-aos-easing={props.aos.easing}
//   >
//     {props.children}
//   </a>
// );
// export const PortImage = (props) => (
//   <img src={props.img} alt="" className="img-fluid portimg" />
