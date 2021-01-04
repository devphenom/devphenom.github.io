import React from "react";
// import { Link } from "react-router-dom";
// $(".navbar-toggler").on("click", function () {
//   $(".animated-icon3").toggleClass("open");
// });
const Navbar = ({ toggleMobileNav, mobileNav }) => {
  // const [navtoggler, setnavtoggler] = useState(false);
  return (
    <nav className="navbar navbar-expand-sm navbar-light shadow-md-sm px-lg-3 scrolling-navbar">
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
      {/* <!-- nav links --> */}
      <div id="navbarLinks" className="navbar-collapse collapse text-center">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item mx-2 active">
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item mx-2">
            <a href="#portfolio" className="nav-link">
              Portfolio
            </a>
          </li>
          <li className="nav-item mx-2">
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
          <li className="nav-item mx-2 btn-outline-orange rounded px-2">
            <a
              href="https://docs.google.com/document/d/1NsP6h_QyK7fGTU3U-XWgCop5Jm4Au9bDL8hT049KIrg/edit?usp=sharing"
              className="nav-link "
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
