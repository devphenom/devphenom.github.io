import React from "react";
import {
  PortRow,
  PortCard,
  PortName,
  PortText,
  PortTagContainer,
  PortTag,
  PortImageContainer,
  PortImage,
} from "./PortfolioCard";
// import PortCard from "./PortfolioCard";
// import preload from "./portfoliodata.json";

const Portfolio = () => (
  <section id="portfolio" className="p-2">
    <div className="container">
      {/* title row */}
      <div className="row py-5">
        <div className="col">
          <h1
            className="display-4 font-weight-bold headline"
            data-aos="fade-right"
            data-aos-duration="1000"
            // data-aos-delay="200"
            data-aos-easing="linear"
          >
            Portfolio
          </h1>
          <div
            className="underline"
            data-aos="fade-left"
            data-aos-duration="1000"
            // data-aos-delay="200"
            data-aos-easing="linear"
          ></div>
        </div>{" "}
      </div>
      {/* end of title row */}

      {/* Tandem Trivia */}
      <PortRow>
        <PortImageContainer
          aos={{
            name: "fade-left",
            duration: "1000",
            // delay: "200",
            easing: "ease-in-out",
          }}
          display="d-md-none"
          link="https://ten-tandem.netlify.app"
        >
          <PortImage img={require("../imgs/tandem.png")} />
        </PortImageContainer>
        <PortCard>
          <PortName
            name="Tandme Trivia"
            aos={{
              name: "fade-right",
              duration: "1000",
              delay: "200",
              easing: "linear",
            }}
            link="https://ten-tandem.netlify.app"
          />
          <PortText
            aos={{
              name: "fade-right",
              duration: "1000",
              delay: "200",
              easing: "linear",
            }}
          >
            A responsive trivia web application that generates random 10
            questions with their multiple choices and scores user at the end of
            each finished round.
          </PortText>
          <PortTagContainer>
            <PortTag
              aos={{
                name: "fade-right",
                duration: "1000",
                delay: "400",
                easing: "linear",
              }}
              name="React JS"
            />
            <PortTag
              aos={{
                name: "fade-right",
                duration: "1000",
                delay: "300",
                easing: "linear",
              }}
              name="Bootstrap 4"
            />
          </PortTagContainer>
        </PortCard>
        <PortImageContainer
          aos={{
            name: "fade-left",
            duration: "1000",
            // delay: "200",
            easing: "ease-in-out",
          }}
          display="d-none d-md-block"
          link="https://ten-trivia.netlify.app"
        >
          <PortImage img={require("../imgs/tandem.png")} />
        </PortImageContainer>
      </PortRow>
      {/* end of tandem trivia portfolio */}

      {/* country portfolio */}
      <PortRow className="d-none">
        <PortImageContainer
          aos={{
            name: "fade-right",
            duration: "1000",
            // delay: "200",
            easing: "ease-in-out",
          }}
          className="countryimg"
          link="https://my-country.vercel.app"
        >
          <PortImage img={require("../imgs/Country.png")} />
        </PortImageContainer>
        <PortCard>
          <PortName
            name="Country Rest API Data"
            aos={{
              name: "fade-left",
              duration: "1000",
              delay: "200",
              easing: "linear",
            }}
            link="https://my-country.vercel.app"
          />
          <PortText
            aos={{
              name: "fade-left",
              duration: "1000",
              delay: "200",
              easing: "linear",
            }}
          >
            A challenge from{" "}
            <a
              href="https://frontendmentor.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              frontendmentor
            </a>{" "}
            which displays countries data (flag, population, region, capital,
            borders etc.).
          </PortText>
          <PortTagContainer>
            <PortTag
              aos={{
                name: "fade-left",
                duration: "1000",
                delay: "300",
                easing: "linear",
              }}
              name="React JS"
            />
            <PortTag
              aos={{
                name: "fade-left",
                duration: "1000",
                delay: "200",
                easing: "linear",
              }}
              name="Rest API"
            />
            <PortTag
              aos={{
                name: "fade-left",
                duration: "1000",
                delay: "200",
                easing: "linear",
              }}
              name="Dark Mode"
            />
          </PortTagContainer>
        </PortCard>
      </PortRow>
      {/* end of country portfolio */}

      {/* covid portfolio */}
      <PortRow>
        <PortImageContainer
          aos={{
            name: "fade-left",
            duration: "1000",
            // delay: "200",
            easing: "ease-in-out",
          }}
          display="d-md-none"
          link="https://covidstrain.vercel.app"
        >
          <PortImage img={require("../imgs/Covid.png")} />
        </PortImageContainer>
        <PortCard>
          <PortName
            name="Covid-19 Tracker"
            aos={{
              name: "fade-right",
              duration: "1000",
              delay: "200",
              easing: "linear",
            }}
            link="https://covidstrain.vercel.app"
          />
          <PortText
            aos={{
              name: "fade-right",
              duration: "1000",
              delay: "200",
              easing: "linear",
            }}
          >
            A web application that keeps track of Corona Virus data around the
            world. Top 5 affected countries, death, affected and recovered
            cases.
          </PortText>
          <PortTagContainer>
            <PortTag
              aos={{
                name: "fade-right",
                duration: "1000",
                delay: "400",
                easing: "linear",
              }}
              name="HTML/CSS"
            />
            <PortTag
              aos={{
                name: "fade-right",
                duration: "1000",
                delay: "300",
                easing: "linear",
              }}
              name="Bootstrap4"
            />
            <PortTag
              aos={{
                name: "fade-right",
                duration: "1000",
                delay: "200",
                easing: "linear",
              }}
              name="JavaScript/ES6"
            />
            <PortTag
              aos={{
                name: "fade-right",
                duration: "1000",
                delay: "100",
                easing: "linear",
              }}
              name="Rest API"
            />
          </PortTagContainer>
        </PortCard>
        <PortImageContainer
          aos={{
            name: "fade-left",
            duration: "1000",
            // delay: "200",
            easing: "ease-in-out",
          }}
          display="d-none d-md-block"
          link="https://covidstrain.vercel.app"
        >
          <PortImage img={require("../imgs/Covid.png")} />
        </PortImageContainer>
      </PortRow>
      {/* end of covid portfolio */}

      {/* github repo clone */}
      <PortRow className="d-none">
        <PortImageContainer
          aos={{
            name: "fade-right",
            duration: "1000",
            // delay: "200",
            easing: "ease-in-out",
          }}
          className="countryimg"
          link="https://devphenom-githubrepo.netlify.app/"
        >
          <PortImage img={require("../imgs/github.png")} />
        </PortImageContainer>
        <PortCard>
          <PortName
            name="Github Repo Clone"
            aos={{
              name: "fade-left",
              duration: "1000",
              delay: "200",
              easing: "linear",
            }}
            link="https://devphenom-githubrepo.netlify.app/"
          />
          <PortText
            aos={{
              name: "fade-left",
              duration: "1000",
              delay: "200",
              easing: "linear",
            }}
          >
            A clone of my github profile which displays my github account's
            profile details and most recent 20 public repositories
          </PortText>
          <PortTagContainer>
            <PortTag
              aos={{
                name: "fade-left",
                duration: "1000",
                delay: "400",
                easing: "linear",
              }}
              name="HTML/CSS"
            />
            <PortTag
              aos={{
                name: "fade-left",
                duration: "1000",
                delay: "300",
                easing: "linear",
              }}
              name="JavaScript/ES6"
            />
            <PortTag
              aos={{
                name: "fade-left",
                duration: "1000",
                delay: "200",
                easing: "linear",
              }}
              name="GraphQL"
            />
          </PortTagContainer>
        </PortCard>
      </PortRow>
      {/* end of github repo clone */}

      {/* easybank portfolio */}
      <PortRow className="d-none">
        <PortImageContainer
          aos={{
            name: "fade-right",
            duration: "1000",
            // delay: "200",
            easing: "ease-in-out",
          }}
          className="countryimg"
          display="d-md-none"
          link="https://easybank-landing-page-sooty.vercel.app/"
        >
          <PortImage img={require("../imgs/easybank.png")} />
        </PortImageContainer>
        <PortCard>
          <PortName
            name="Easybank Landing Page"
            aos={{
              name: "fade-right",
              duration: "1000",
              delay: "200",
              easing: "linear",
            }}
            link="https://easybank-landing-page-sooty.vercel.app/"
          />
          <PortText
            aos={{
              name: "fade-right",
              duration: "1000",
              delay: "200",
              easing: "linear",
            }}
          >
            Design from{" "}
            <a
              href="https://frontendmentor.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              frontendmentor
            </a>{" "}
            challenge. A functional client side landing page for a bank web
            application.
          </PortText>
          <PortTagContainer>
            <PortTag
              aos={{
                name: "fade-right",
                duration: "1000",
                delay: "400",
                easing: "linear",
              }}
              name="HTML/CSS"
            />
            <PortTag
              aos={{
                name: "fade-right",
                duration: "1000",
                delay: "300",
                easing: "linear",
              }}
              name="Bootstrap"
            />
            <PortTag
              aos={{
                name: "fade-right",
                duration: "1000",
                delay: "200",
                easing: "linear",
              }}
              name="AOS"
            />
          </PortTagContainer>
        </PortCard>
        <PortImageContainer
          aos={{
            name: "fade-left",
            duration: "1000",
            // delay: "200",
            easing: "ease-in-out",
          }}
          className="countryimg"
          display="d-none d-md-block"
          link="https://easybank-landing-page-sooty.vercel.app/"
        >
          <PortImage img={require("../imgs/easybank.png")} />
        </PortImageContainer>
      </PortRow>
      {/* end of easybank landing page */}
    </div>
  </section>
);

export default Portfolio;
