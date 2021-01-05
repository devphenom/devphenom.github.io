import { Grid, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: `${theme.spacing(1)}px ${theme.spacing(3)}px`,
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.light,
    borderRadius: "4px",
  },
}));

export default function Tags(props) {
  let no = 10;
  const classes = useStyles();
  const { tags } = props;
  return (
    <Grid container justify="flex-end">
      {tags.map((tag) => (
        <Grid component="span" item key={tag} classes={{ root: classes.root }}>
          {`${tag} ${(no += 1)}`}
        </Grid>
      ))}
    </Grid>
  );
}
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
