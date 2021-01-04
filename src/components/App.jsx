import React, { useState } from "react";
import {
  createMuiTheme,
  CssBaseline,
  responsiveFontSizes,
  // makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import DarkMode from "./DarkMode";
import Main from "./Main";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff8e3c",
      light: "#eff0f3",
      dark: "#0d0d0d",
    },
    // secondary: {
    //   main:
    // },
  },
  typography: {
    fontFamily: ['"Josefin Sans"', "Roboto", "sans-serif"].join(","),
    fontSize: 16,
  },
});
theme = responsiveFontSizes(theme);

const App = () => {
  const [darkmode, setdarkmode] = useState(false);
  const [mobileNav, setmobileNav] = useState(false);

  const toggleMobileNav = () => setmobileNav(!mobileNav);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={darkmode ? "bg-darK" : "bg-light"}>
        <>
          {/* <DarkMode darkmode={darkmode} setdarkmode={setdarkmode} />
          <Navbar toggleMobileNav={toggleMobileNav} mobileNav={mobileNav} /> */}
          {/* <MobileNav
            toggleMobileNav={toggleMobileNav}
            mobileNav={mobileNav}
            darkmode={darkmode}
          /> */}
          <Main />
          {/* <About />
          <Portfolio />
          <Contact /> */}
        </>
      </div>
    </ThemeProvider>
  );
};
export default App;
