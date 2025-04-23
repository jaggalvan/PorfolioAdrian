import Home from "../PortfolioContainer/Home/Home";
import AboutMe from "../PortfolioContainer/AboutMe/AboutMe";
import Resume from "../PortfolioContainer/Resume/Resume";
import Testimonial from "../PortfolioContainer/Testimonial/Testimonial";
import ContactMe from "../PortfolioContainer/ContactMe/ContactMe";
import Certificados from "../PortfolioContainer/Certificados/Certificados";

export const TOTAL_SCREENS = [
  {
    screen_name: "Inicio",
    component: Home,
  },
  {
    screen_name: "Conoceme",
    component: AboutMe,
  },
  {
    screen_name: "Curriculum",
    component: Resume,
  },
  {
    screen_name: "Proyectos",
    component: Testimonial,
  },
  {
    screen_name: "Contactame",
    component: ContactMe,
  },
];

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;

  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }

  return -1;
};
