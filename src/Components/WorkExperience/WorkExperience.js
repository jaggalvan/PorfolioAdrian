import React from "react";
import "./WorkExperience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { MdGroupWork } from "react-icons/md";

const WorkExperience = () => {
  const data = [
    {
      companyname: "KSP Technology para HDI Seguros",
      position: "Desarrollo De Sistemas",
      des: "Optmización de Store Procedure (Sybase), Creación de modulos C#",
      year: "2019-2020",
      techskills: [
        {
          techname: "SQL , Store Procedure",
        },
        {
          techname: "C#",
        },

      ],
    },

    {
      companyname: "Complejo De La Presidencia Municipal SFR",
      position: "Desarrollo De Sistemas",
      des: " Desarrolle el sistema central de ingresos monetarios para todas las dependencias",
      year: "2018-2019",

      techskills: [
        {
          techname: "SQL Server",
        },
        {
          techname: "C# POO",
        },
        {
          techname: "MYSQL",
        },
      ],
    },

    {
      companyname: "Evaluación Integral De Obras Civiles S.A. De C.V.",
      position: "Sistemas Informaticos, Soporte, Computación",
      des: "Administrar Sistemas Informaticos y dar soporte de ellos, Administración del servidor",
      year: "2013-2017",

      techskills: [
        {
          techname: "Linux",
        },
        {
          techname: "Soporte Técnico",
        },
        {
          techname: "Redes",
        },
        {
          techname: "Administación de computadoras",
        },

      ],
    },

    {      companyname: "Acremex",
      position: "Ejecutivo De Desarrollo De Sistemas",
      des: "Desarrollo de modulos de JurisWeb y modulos de Administrador de Documentos digitalizados de los socios ",
      year: "2018-2019",

      techskills: [
        {
          techname: "PHP",
        },
        {
          techname: "Java",
        },
        {
          techname: "SQL Server",
        },
        {
          techname: "MySQL",
        },
      ],
    },
  ];

  const colors = [
    "#800000",
    "#FF8042",
    "#001CCE",
    "#4B088A",
    "#FF6347",
    "#FF1042",
  ];

  return (
    <div className="container workexperience-section" id="workexperience">
      <div className="section-title">
        <h5>Experiencia De Trabajo</h5>
        <span className="line"></span>
      </div>

      <div className="timeline-section">
        <VerticalTimeline lineColor="#FF1042">
          {data.map((item, index) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: colors[index], color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #FFBB24" }}
              date={item.year}
              dateClassName="date-class"
              iconStyle={{ background: colors[index], color: "#fff" }}
              icon={<MdGroupWork />}
            >
              <h3 className="vertical-timeline-element-title">
                {item.companyname}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item.position}
              </h4>

              <div className="row">
                {item.techskills.map((tec, index) => (
                  <div
                    className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                    key={index}
                  >
                    <div className="tech-skills">
                      <p>{tec.techname}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p>{item.des}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>


      
    </div>
  );
};

export default WorkExperience;
