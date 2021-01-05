import {
  AppBar,
  Button,
  Grid,
  Hidden,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import React from "react";
// import { Link } from "react-router-dom";
// $(".navbar-toggler").on("click", function () {
//   $(".animated-icon3").toggleClass("open");
// });

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: "20vh",
    "& .MuiButton-root": {
      margin: `0px ${theme.spacing(0.5)}px`,
    },
  },

  // root: {
  // },
  label: {
    textTransform: "none",
  },
}));
const Navbar = ({ toggleMobileNav, mobileNav }) => {
  const classes = useStyles();
  const buttonClass = { label: classes.label };
  // const [navtoggler, setnavtoggler] = useState(false);
  return (
    <AppBar position="static" color="transparent" className={classes.root}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item></Grid>
          <Grid item sm></Grid>

          <Grid item>
            <Hidden mdDown>
              <Button href="#about" color="primary" classes={buttonClass}>
                About
              </Button>
              <Button href="#portfolio" color="primary" classes={buttonClass}>
                Portfolio
              </Button>
              <Button href="#contact" color="primary" classes={buttonClass}>
                Contact
              </Button>
              <Button
                href="https://docs.google.com/document/d/1NsP6h_QyK7fGTU3U-XWgCop5Jm4Au9bDL8hT049KIrg/edit?usp=sharing"
                color="primary"
                classes={buttonClass}
                variant="outlined"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </Button>
            </Hidden>
          </Grid>
          <Grid item>
            <Hidden mdUp>
              <div
                className="navbar-toggler p-2 ml-auto navbar-btn border-0"
                type="button"
                data-toggle="collapse"
                data-target="#navbarLinks"
                aria-controls="navbarLinks"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={toggleMobileNav}
                // onClick={() => props.setdarkmode(!props.darkmode)}
              >
                <div className={`animated-icon3 ${mobileNav ? "open" : ""}`}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </Hidden>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
    // <nav className="navbar navbar-expand-sm navbar-light shadow-md-sm px-lg-3 scrolling-navbar">
    // <div
    //   className="navbar-toggler p-2 ml-auto navbar-btn border-0"
    //   type="button"
    //   data-toggle="collapse"
    //   data-target="#navbarLinks"
    //   aria-controls="navbarLinks"
    //   aria-expanded="false"
    //   aria-label="Toggle navigation"
    //   onClick={toggleMobileNav}
    //   // onClick={() => props.setdarkmode(!props.darkmode)}
    // >
    //   <div className={`animated-icon3 ${mobileNav ? "open" : ""}`}>
    //     <span></span>
    //     <span></span>
    //     <span></span>
    //   </div>
    // </div>
    //   {/* <!-- nav links --> */}
    //   <div id="navbarLinks" className="navbar-collapse collapse text-center">
    //     <ul className="navbar-nav ml-auto">
    //       <li className="nav-item mx-2 active">
    //         <a href="#about" className="nav-link">
    //           About
    //         </a>
    //       </li>
    //       <li className="nav-item mx-2">
    //         <a href="#portfolio" className="nav-link">
    //           Portfolio
    //         </a>
    //       </li>
    //       <li className="nav-item mx-2">
    //         <a href="#contact" className="nav-link">
    //           Contact
    //         </a>
    //       </li>
    //       <li className="nav-item mx-2 btn-outline-orange rounded px-2">
    //         <a
    //           href="https://docs.google.com/document/d/1NsP6h_QyK7fGTU3U-XWgCop5Jm4Au9bDL8hT049KIrg/edit?usp=sharing"
    //           className="nav-link "
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           Resume
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
};
export default Navbar;
