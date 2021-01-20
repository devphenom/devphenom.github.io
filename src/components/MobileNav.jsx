import { List, ListItem, ListItemText, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    background: theme.palette.primary.light,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    height: "100vh",
    width: "100vw",
    marginLeft: "-100vw",
    zIndex: 999999,
    transition: "0.8s",
    "&.active": {
      margin: 0,
    },
  },
  listRoot: {
    textAlign: "center",
    fontSize: "3rem",
    color: theme.palette.primary.main,
    "& .MuiTypography-displayBlock": {
      fontSize: "1.5rem",
    },
    // margin: "auto",
  },
}));

export function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}
const MobileNav = ({ toggleMobileNav, mobileNav, darkmode }) => {
  const classes = useStyles();
  return (
    <List
      className={`${classes.root} ${mobileNav ? "active" : ""}`}
      component="nav"
    >
      <ListItemLink
        href="#about"
        onClick={toggleMobileNav}
        className={classes.listRoot}
      >
        <ListItemText>About</ListItemText>
      </ListItemLink>
      <ListItemLink
        href="#portfolio"
        onClick={toggleMobileNav}
        className={classes.listRoot}
      >
        <ListItemText>Portfolio</ListItemText>
      </ListItemLink>
      <ListItemLink
        href="#contact"
        onClick={toggleMobileNav}
        className={classes.listRoot}
      >
        <ListItemText>Contact</ListItemText>
      </ListItemLink>
      <ListItemLink
        href="https://docs.google.com/document/d/1NsP6h_QyK7fGTU3U-XWgCop5Jm4Au9bDL8hT049KIrg/edit?usp=sharing"
        variant="outlined"
        onClick={toggleMobileNav}
        className={classes.listRoot}
      >
        <ListItemText>Resume</ListItemText>
      </ListItemLink>
    </List>
  );
};

export default MobileNav;
