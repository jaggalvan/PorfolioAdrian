import React from "react";
import "./Testimonial.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Zoom from "react-reveal/Zoom";

const Testimonial = () => {
  const data = [
    {
      name: "React",
      position: "CEO",
      des: "a",
      img: "https://create-react-app.dev/img/logo-og.png",
      portfolio: [
        "https://quiet-gaufre-4210e2.netlify.app/",
        "https://jaggalvan.github.io/Listado/build/",
        "https://github.com/tu-usuario/angular-project-3",
        "https://github.com/tu-usuario/angular-project-4",
        "https://github.com/tu-usuario/angular-project-5",
        // Añade más enlaces aquí si es necesario
    ]
    },
    {
      name: "Python",
      position: "Product Manager",
      des: "b",
      img: "data:image/png;base64,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",
      portfolio: [
        "https://github.com/tu-usuario/angular-portfolio",
        "https://github.com/tu-usuario/angular-project-2",
        // Añade más enlaces aquí si es necesario
    ]
    },
    {
      name: "Angular",
      position: "Product Manager",
      des: "c",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSTBlrlJDcBAtVaqB4A9oXNqOKeNK23x1Z5g&usqp=CAU",
      portfolio: [
        "https://github.com/tu-usuario/angular-portfolio",
        "https://github.com/tu-usuario/angular-project-2",
        // Añade más enlaces aquí si es necesario
    ]
    },
   
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    initialSlide: 0,
    autoplay: true,
    rows: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  const colors = [
    "#F1C40F",
    "#4B088A",
    "#8181F7",
    "#FE2EF7",
    "#585858",
    "#800000",
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#001CCE",
    "#00C79F",
    "#FFBB24",
    "#FF1042",
    "#FF1042",
  ];
  return (
    <div className="container testimonial-section" id="testimonial">
      <div className="section-title">
        <h5>Portafolio</h5>
        <span className="line"></span>
      </div>
  
      <div className="testimonial-slider">
        <Slider {...settings}>
          {data.map((item, index) => (
            <Zoom key={index}>
              <div className="content-slider-main">
                <div className="content-slider" style={{ backgroundColor: colors[index] }}>
                  <img
                    src={item.img}
                    alt="testimonil imgae"
                    className="center-image"
                  />
                  <p>{item.name}</p>
                  {item.portfolio && (
                    <div>
                      <ul>
                        {item.portfolio.map((portfolioLink, linkIndex) => (
                          <li key={linkIndex}>
                            <a href={portfolioLink} target="_blank" rel="noopener noreferrer">{`Proyecto ${linkIndex + 1}`}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </Zoom>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
