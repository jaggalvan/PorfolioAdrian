import React, { useState } from "react";
import "./TechStack.css";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
const TechStack = () => {
  const data = [
    {
      name: "IBM - Developing Front End Apps with React",
    },
    {
      name: "IBM - Back-end Application Development with Node.js and Express (Proceso)",
    },
    {
      name: "IECA - Desarrollo Web Con .NET CORE",
    },
    {
      name: "IECA - Desarrollo Web Con React",
    },
    {
      name: "Google Analista De Datos",
    },
    {
      name: "Google Gestión de Proyectos",
    },
    {
      name: "Google Business Intelligence",
    },
    {
      name: "IECA - Desarrollo Web Con .NET CORE (Proceso)",
    },
  ];

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

  const [showMoreTechStack, setShowMoreTechStack] = useState(9);

  const loadMore = () => {
    setShowMoreTechStack((prev) => prev + 3);
  };

  return (
    <div className="container techstack-section" id="techstack">
      <div className="section-title">
        <h5>Certificados</h5>
        <span className="line"></span>
      </div>

      <div className="row">
        {data.slice(0, showMoreTechStack).map((item, index) => (
          <Fade right>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
              <div
                className={
                  index === 0
                    ? "tech-content-marked tech-content"
                    : "tech-content"
                }
              >
                <span
                  className="tech-number"
                  style={{ backgroundColor: colors[index] }}
                >
                  {index + 1}
                </span>
                <p>{item.name}</p>
              </div>
            </div>
          </Fade>
        ))}
      </div>

      {showMoreTechStack >= data.length ? null : (
        <Zoom>
          <span className="load-more-tech-stack" onClick={loadMore}>
            Load More
          </span>
        </Zoom>
      )}
    </div>
  );
};

export default TechStack;
