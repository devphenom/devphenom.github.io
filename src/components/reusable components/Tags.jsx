import { Grid, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    margin: theme.spacing(0.5),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.light,
    borderRadius: "4px",
  },
}));

export default function Tags(props) {
  let duration = 800;
  const classes = useStyles();
  const { tags, reverse } = props;
  return (
    <Grid container justify={reverse ? "flex-end" : "flex-start"}>
      {tags.map((tag) => (
        <Grid
          component="span"
          item
          key={tag}
          classes={{ root: classes.root }}
          data-aos={reverse ? "fade-right" : "fade-left"}
          data-aos-duration={(duration += 200)}
          data-aos-easing="linear"
        >
          {tag}
        </Grid>
      ))}
    </Grid>
  );
}
