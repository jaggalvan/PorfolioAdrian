import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import 'font-awesome/css/font-awesome.min.css'; // Asegúrate de que esta línea esté aquí
import "./AboutMe.css";

export default function AboutMe(props) {

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description:
      "Desarrollador Full Stack para web y aplicaciones móviles con sólidos conocimientos en las tecnologías MERN (MongoDB, Express.js, React y Node.js) y experiencia en el uso de Redux para la gestión del estado de las aplicaciones. Destaco por mi capacidad para desarrollar aplicaciones de manera eficiente y efectiva. Poseo una Ingeniería En sistemas Computacionales (ISC) y Maestría En Ciencias De La Computación (M.C.C) estoy comprometido en ser un activo valioso para cualquier organización.",
    highlights: {
      bullets: [
        "Desarrollo Full Stack para aplicaciones web y móviles.",
        "Front-End Interactivo siguiendo diseños específicos.",
        "Experiencia en React y React Native para el desarrollo de interfaces de usuario.",
        "Gestión de Estado con Redux para aplicaciones complejas",
        "Construcción de API REST robustas y escalables.",
        "Administración de Bases de Datos para asegurar la integridad y eficiencia de los datos.",
      ],
      heading: "Algunos puntos destacados de mi perfil incluyen:",
    },
  };

  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"Conoceme"} subHeading={"Por qué elegirme?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
            <a href="https://wa.me/4767386089" target="_blank" rel="noopener noreferrer">
              <button className="btn primary-btn">
                WhatsApp 
               </button>
            </a>
              <a href="2025 GALVAN ADRIAN - Resume.pdf" download="2025 GALVAN ADRIAN - Resume.pdf">
                <button className="btn highlighted-btn">Curriculum Ingles</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
