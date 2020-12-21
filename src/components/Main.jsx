import React from "react";

// import anime from "animejs/lib/anime.es.js";

// anime({
//   targets: ".name",
//   translateX: 250,
//   duration: 2000,
//   loop: 3,
// });

const Main = () => (
  <div id="main" className="px-3">
    <div className="container min-100 d-flex align-item-center">
      <div className="row align-items-center">
        <div className="col-md-10 mx-auto py-md-3">
          <h4 className="p" data-aos="zoom-in-up" data-aos-duration="1000">
            Hello{" "}
            <span role="img" aria-label="emoji">
              {" "}
              ✋,
            </span>
            I'm <br />
          </h4>
          <h1
            className="display-3 font-weight-bold headline"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-easing="ease-in-out"
          >
            <strong> Ali Abdulsamad Tolulope</strong>
          </h1>
          <h5
            className="py-3 text-justify p"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-delay="250"
            data-aos-easing="linear"
          >
            <em>
              I'm a Nigerian based front-end developer building user-friendly
              client-side web applications to meet customer's requirement.
            </em>
          </h5>
          <a href="mailto:aliabdulsamad15@gmail.com">
            <button
              className="btn btn-lg btn-orange px-3 px-md-5 py-2 py-md-3 font-weight-bold my-2 mr-2"
              data-aos="fade-up"
              data-aos-duration="800"
              // data-aos-delay="250"
              data-aos-easing="linear"
            >
              Hire Me
            </button>
          </a>
          <a href="#contact">
            <button
              className="btn btn-lg btn-outline-orange px-3 px-md-5 py-2 py-md-3  font-weight-bold my-2 mr-2"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="250"
              data-aos-easing="linear"
            >
              Get in Touch
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Main;
