import React from "react";
import "./About.css";
import ProfilePic from "../../Image/a.jpg";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const About = () => {
  return (
    <div className="container about-section" id="about">
      <div className="row">
        <Fade bottom>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="about-image">
              <img src={ProfilePic} alt="Profile Photo" />
            </div>
          </div>
        </Fade>

        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-details">
            <Flip left>
              <div className="about-title">
                <h5>Introduccion</h5>
                <span className="line"></span>
              </div>
            </Flip>

            <Fade right>
              <p>
              Profesional en el Área de Sistemas
Computacionales con cerca de 18 años
de experiencia ocupando posiciones
como ejecutivo de desarrollo de
sistemas, Soporte técnico, Sistemas
informaticos, Encargado de sistemas
enfocados a resultados basado en mi
capacidad de análisis, habilidades de
programación, trabajo ene quipo y
desarrollo de estrategias, he logrado la
administración efectiva del
departamento de sistemas, busco
consolidarme en mi profesión
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
