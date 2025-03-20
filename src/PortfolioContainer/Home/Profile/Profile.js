import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
{/*             <div className="cols-icon">
              <a href="https://web.facebook.com/?_rdc=1&_rdr">
                <i className="fa fa-facebook-square" />
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square" />
              </a>
              <a href="https://www.instagram.com/instructor_ehizeex/">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.youtube.com/channel/UCSSr5ZDFbilpZ592_ycoAwA">
                <i className="fa fa-youtube-square" />
              </a>
              <a href="https://twitter.com/Ehiedu_baba">
                <i className="fa fa-twitter" />
              </a>
            </div> */}
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hola soy <span className="highlighted-text">ADRIAN</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Desarrollador 😎",
                    1000,
                    "Full stack 💻",
                    1000,
                    "Algoritmos IA 📱",
                    1000,
                    "Diseño UX 🔴",
                    1000,
                    "React/React Native 🌐",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
            Creando soluciones digitales completas con experiencia en desarrollo de front-end y back-end para potenciar el rendimiento y la experiencia del usuario.
            </span>
          </div>

          <div className="profile-options">
            {/* <button className="btn primary-btn"> Hire Me </button> */}
            <a href="2025 GALVAN ADRIAN - CV.pdf" download="2025 GALVAN ADRIAN - CV.pdf">
              <button className="btn highlighted-btn">Curriculum PDF Español</button>
            </a>
            <a href="2025 GALVAN ADRIAN - Resume.pdf" download="2025 GALVAN ADRIAN - Resume.pdf">
              <button className="btn highlighted-btn">Curriculum PDF Ingles</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
