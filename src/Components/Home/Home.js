import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import MyCv from "./cv.pdf";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Fade from "react-reveal/Fade";

import { Link } from "react-scroll";

const Home = ({ theme, changeTheme }) => {
  return (
    <div className="container-fluid home" id="home">
      <div className="theme-change" onClick={changeTheme}>
        {theme === "light" ? (
          <p>
            <BsFillMoonStarsFill size={40} />
          </p>
        ) : (
          <p className="sun-theme-icon">
            <BsFillSunFill size={40} />
          </p>
        )}
      </div>

      <div className="container home-content">
        <Fade right>
          <h1>Mi nombre es José Adrián Galván García</h1>
          <h3>
            <Typewriter
              options={{
                strings: [
                  "Analista De Datos",
                  "Desarrollador Web",
                  "Cientifico De Datos",
                  "Desarrollo De sistemas",
                  "Soporte Técnico",
                ],
                autoStart: true,
                loop: true,
                delay: 5,
              }}
            />
          </h3>
        </Fade>

        <Fade bottom>
          <div className="button-for-action">
            <Link
              to="contactsection"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
            >
              <div className="hire-me-button">Contacto</div>
            </Link>
            <div className="get-resume-button">
              <a href={MyCv} download="2024 GALVAN ADRIAN - CV.pdf">
                Curriculum Vitae PDF
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Home;
