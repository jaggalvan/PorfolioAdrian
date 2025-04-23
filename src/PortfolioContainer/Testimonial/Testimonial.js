import React, { useRef } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Testimonial.css";
import lady from "../../../src/img/Testimonial/lista.png";
import ricky from "../../../src/img/Testimonial/ricky.png";
import simpsons from "../../../src/img/Testimonial/simpsons.png";
import shape from "../../../src/img/Testimonial/shape-bg.png";
import balance from "../../../src/img/Testimonial/balance.png";
import UX1 from "../../../src/img/Testimonial/UX1.png";

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const carouselRef1 = useRef(null);
  const carouselRef2 = useRef(null);

  const options = {
    loop: false,
    margin: 10,
    nav: false,
    dots: false,
    smartSpeed: 1000,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  const scrollLeft = (carouselRef) => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  const scrollRight = (carouselRef) => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  return (
    <div>
      <ScreenHeading title={"Proyectos"} subHeading={"Desarrollos REACT"} />
      <section className="testimonial-section" id={props.id || ""}>
        <div className="container">
          <div className="button-container" style={{ textAlign: "center", marginBottom: "20px" }}>
            <button onClick={() => scrollLeft(carouselRef1)} style={{ marginRight: "10px", cursor: "pointer", zIndex: "10", position: "relative" }}>⬅</button>
            <button onClick={() => scrollRight(carouselRef1)} style={{ cursor: "pointer", zIndex: "10", position: "relative" }}>➡</button>
          </div>
          <OwlCarousel ref={carouselRef1} className="owl-carousel custom-carousel" {...options}>
          <div className="testi-item">
          <p>Gestión de tareas dinámicas</p>
            <div className="image-container">
              <a href="https://jaggalvan.github.io/Listado/build/" target="_blank" rel="noopener noreferrer">
                <img src={lady} alt="Testimonio" />
              </a>
            </div>
         
              <p>Esta aplicación fue desarrollada en React.js con componentes reutilizables y gestión de estado.</p>
            
          </div>

          <div className="testi-item">
          <p>Esta app utiliza React con manejo de estado y consumo de API</p>
            <div className="image-container">
              <a href="https://jaggalvan.github.io/Listado/build/" target="_blank" rel="noopener noreferrer">
                <img src={ricky} alt="Testimonio" />
              </a>
            </div>
         
            <p>Aplicación desarrollada en React.js que consume una API para mostrar información de personajes de Rick & Morty de forma dinámica e interactiva.</p>
            
          </div>

          <div className="testi-item">
          <p>Aplicación web interactiva en React que muestra las mejores frases de Los Simpsons</p>
            <div className="image-container">
              <a href="https://jaggalvan.github.io/FrasesSimpsons/build/" target="_blank" rel="noopener noreferrer">
                <img src={simpsons} alt="Testimonio" />
              </a>
            </div>
         
            <p>Consume una API para obtener y mostrar frases icónicas de Los Simpsons en una interfaz moderna y responsiva.</p>
            
          </div>          

          <div className="testi-item">
          <p>Aplicación desarrollada en React.js que permite calcular el crecimiento de una inversión a lo largo del tiempo.</p>
            <div className="image-container">
              <a href="https://jaggalvan.github.io/Listado/build/" target="_blank" rel="noopener noreferrer">
                <img src={balance} alt="Testimonio" />
              </a>
            </div>
         
            <p>Utiliza formularios controlados para la entrada de datos y eventos en React para calcular el balance final.</p>
            
          </div>    
        {/*     <div className="testi-item" style={{ display: 'inline-block', width: '300px', marginRight: '10px' }}>
              <div className="testi-comment">
                <p>
                  
                Aplicación web interactiva en React que muestra las mejores frases de Los Simpsons
                  
                </p>
              </div>
              <div className="client-info">
                <a href="https://jaggalvan.github.io/FrasesSimpsons/build/" target="_blank" rel="noopener noreferrer">
                  <img src={simpsons} alt="Testimonio" style={{ cursor: 'pointer' }} />
                </a>
                
                <p>Consume una API para obtener y mostrar frases icónicas de Los Simpsons en una interfaz moderna y responsiva.</p>
              </div>
            </div> */}

            
          </OwlCarousel>
        </div>
      </section>
      <ScreenHeading title={"Proyectos"} subHeading={"Diseños UX"} />
      <section className="testimonial-section" id={props.id || ""}>
        <div className="container">
          <div className="button-container" style={{ textAlign: "center", marginBottom: "20px" }}>
            <button onClick={() => scrollLeft(carouselRef2)} style={{ marginRight: "10px", cursor: "pointer", zIndex: "10", position: "relative" }}>⬅</button>
            <button onClick={() => scrollRight(carouselRef2)} style={{ cursor: "pointer", zIndex: "10", position: "relative" }}>➡</button>
          </div>
          <OwlCarousel ref={carouselRef2} className="owl-carousel custom-carousel" {...options}>
            
          <div className="testi-item">
          <p>Diseño UX certificado Google.</p>
            <div className="image-container">
              <a href="https://jaggalvan.github.io/UX/" target="_blank" rel="noopener noreferrer">
                <img src={UX1} alt="Testimonio" />
              </a>
            </div>
         
            <p>Explora mis proyectos de diseño centrado en el usuario, donde busco crear soluciones intuitivas y funcionales. Cada proyecto refleja mi enfoque en mejorar la experiencia digital a través de un diseño eficiente.</p>
            
          </div>             
            

          </OwlCarousel>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="Footer" />
      </div>
    </div>
  );
}
