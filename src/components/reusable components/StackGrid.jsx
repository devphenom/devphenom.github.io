import { Grid, Icon, Typography } from "@material-ui/core";
import React from "react";

export default function StackGrid(props) {
  const { icon, text, delay, isIcon } = props;
  return (
    <Grid
      item
      xs={4}
      container
      direction="column"
      alignItems="center"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={delay}
      data-aos-easing="linear"
    >
      {/* <Icon className={`${icon}`} fontSize="large" color="primary" /> */}
      {isIcon ? (
        <Icon className={icon} fontSize="large" color="primary" />
      ) : (
        <img src={icon} className="icon" alt={`${text} logo`} />
      )}
      <Typography paragraph className="font-weight-bold">
        {text}
      </Typography>
    </Grid>
  );
}
