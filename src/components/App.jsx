import React, { useState } from "react";
import { createMuiTheme, CssBaseline, makeStyles, ThemeProvider } from "@material-ui/core";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import DarkMode from "./DarkMode";
import Main from "./Main";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

// let theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: "#ff8e3c",
//       light: "#eff0f3",
//       dark: "#0d0d0d",
//     },
//     // secondary: {
//     //   main:
//     // },
//   },
//   typography: {
//     fontFamily: ['"Josefin Sans"', "Roboto", "sans-serif"].join(","),
//     fontSize: 16,
//   },
// });
// theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
    "& .link": {
      textDecoration: "none",
      color: "#ff8e3c",
    },
  },
}));

const App = () => {
  const classes = useStyles();
  const [darkmode, setdarkmode] = useState(true);
  const [mobileNav, setmobileNav] = useState(false);
  const theme = createMuiTheme(darkmode ? dark : light);
  const toggleMobileNav = () => setmobileNav(!mobileNav);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <>
          <Navbar toggleMobileNav={toggleMobileNav} mobileNav={mobileNav} />
          <Main />
          <About />
          <Portfolio />
          <Contact />
          <MobileNav toggleMobileNav={toggleMobileNav} mobileNav={mobileNav} darkmode={darkmode} />
          <DarkMode darkmode={darkmode} setdarkmode={setdarkmode} />
        </>
      </div>
    </ThemeProvider>
  );
};
export default App;

export const light = {
  palette: {
    type: "light",
    primary: {
      main: "#ff8e3c",
      light: "#eff0f3",
      dark: "#0d0d0d",
    },
  },
  typography: {
    fontFamily: ['"Josefin Sans"', "Roboto", "sans-serif"].join(","),
    fontSize: 16,
  },
};
export const dark = {
  palette: {
    type: "dark",
    primary: {
      main: "#ff8e3c",
      light: "#eff0f3",
      dark: "#fffffe",
    },
    background: {
      default: "#0f0e17",
      paper: "#0f0e17",
    },
  },
  typography: {
    fontFamily: ['"Josefin Sans"', "Roboto", "sans-serif"].join(","),
    fontSize: 16,
  },
};
