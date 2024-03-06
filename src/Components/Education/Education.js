import React from "react";
import "./Education.css";
import { FaGraduationCap } from "react-icons/fa";



import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  const data = [
  {  name: "Instituto Tecnologico Nacional De México Campus León, CONACYT",
    degree: "Maestría En Ciencias De La Computación (inteligencia Artificial)",
    year: "2021-2023",
    des: "Consejo nacional de ciencia y tecnologia, becado tiempo completo",
  },
  {
    name: "Instituto Universitario Del Centro De México",
    degree: "Maestría En Administración",
    year: "2014-2016",
    des: "Maestría en administración con un enfoque específico en el ámbito de la ingeniería en sistemas",
  },
  {
    name: "Intituto Tecnologico Nacional De México Campus León",
    degree: "Ingenieria En sistemas Computacionales",
    year: "1993-1998",
    des: "La ingeniería en sistemas disciplina interdisciplinaria que combina principios de la ingeniería, la informática y la gestión de sistemas para diseñar, desarrollar, implementar y gestionar sistemas de información complejos y eficientes",
  },
  {
    name: "Centro De Bachillerato Tecnologico Industrial No. 139",
    degree: "Preparatoria",
    year: "1990-1993",
    des: "Una preparatoria en máquinas de combustión interna podría ofrecer un enfoque especializado en mecánica automotriz y tecnologías relacionada",
  }
  ];


  const colors = [
    "#001CCE",
    "#4B088A",
    "#FE2EF7",
    "#FF1042",
  ];

  return (
    <div className="container education-section" id="education">

      <div className="section-title">
        <h5>Education</h5>
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
              icon={<FaGraduationCap />}
            >
              <h3 className="vertical-timeline-element-title">
                {item.name}
              </h3>
              <h5 className="vertical-timeline-element-subtitle" style={{color:"yellow"}}>
                {item.degree}
              </h5>


              <p>{item.des}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>


    </div>
  );
};

export default Education;
