// lang.js

const translations = {
  en: {
    nav_home: "Home",
    nav_health: "Good Health and Well-Being",
    nav_education: "Quality Education",
    nav_gender: "Gender Equality",
    welcome: "Welcome to Our SDG Blog",
    intro: "Explore key global goals and discover how we can build a better future together.",
    about_title: "About SDG",
    about_intro: `The Sustainable Development Goals (SDGs), also called the Global Goals, were introduced by the United Nations in
    2015 as a worldwide effort to tackle major challenges like poverty, inequality, and climate change by 2030.
    There are 17 goals in total, and they’re all connected — progress in one area often supports progress in others.
    The whole idea is to promote development that’s socially, economically, and environmentally sustainable.
    A big part of the commitment is to help those who are the most disadvantaged first. The SDGs aim to end things
    like extreme poverty, hunger, AIDS, and gender-based discrimination. Reaching these goals isn’t just up to
    governments — it’s going to take creativity, knowledge, tech, and financial support from people and communities
    everywhere.`,
    team_title: "Team Members",
    emily: "Project coordinator and researcher on SDG education initiatives",
    justin: "Content designer focused on SDG 3,5",
    miguel: "Web developer and focused on SDG 4.",
    sdg_title: "The Key Principles of the SDGs:",
    sdg_principles: "The Sustainable Development Goals (SDGs) are guided by the following key principles:",
    sdg_principles_list: "", // handled in HTML
    better_future_title: "Building a Better Future: Why Health, Education, and Gender Equality Matter More Than Ever",
    better_future_intro: `When we talk about changing the world, it can feel overwhelming. Where do we even start? The United Nations’ 
    Sustainable Development Goals (SDGs) give us a roadmap, and three of those goals hit especially close to home: 
    Good Health and Well-Being, Quality Education, and Gender Equality.`,
    better_future_body: "These goals aren’t just idealistic visions—they’re real, urgent, and necessary for building a better, more equal future.",
    project_title: "Project Overview",
    project_overview: "This blog is part of a collaborative project between Universidad del Noreste and Mercy University, focusing on the Sustainable Development Goals (SDGs). Our aim is to raise awareness and promote action towards achieving these goals.",
    uni_title: "Participating Universities",
    rights: "All rights reserved."
  },
  es: {
    nav_home: "Inicio",
    nav_health: "Salud y Bienestar",
    nav_education: "Educación de Calidad",
    nav_gender: "Igualdad de Género",
    welcome: "Bienvenidos a Nuestro Blog de los ODS",
    intro: "Explora los objetivos globales clave y descubre cómo podemos construir un mejor futuro juntos.",
    about_title: "Sobre los ODS",
    about_intro: `Los Objetivos de Desarrollo Sostenible (ODS), también llamados Objetivos Globales, fueron introducidos por las Naciones Unidas en 2015 como un esfuerzo mundial para enfrentar grandes desafíos como la pobreza, la desigualdad y el cambio climático para 2030.
    Hay 17 objetivos en total, y todos están conectados — el progreso en un área a menudo apoya el progreso en otras.
    La idea central es promover un desarrollo sostenible desde lo social, económico y ambiental.
    Una parte esencial del compromiso es ayudar primero a los más desfavorecidos. Los ODS buscan acabar con cosas como la pobreza extrema, el hambre, el SIDA y la discriminación de género. 
    Alcanzar estos objetivos no depende solo de los gobiernos: se necesita creatividad, conocimiento, tecnología y apoyo financiero de personas y comunidades de todo el mundo.`,
    team_title: "Miembros del Equipo",
    emily: "Coordinadora del proyecto e investigadora en iniciativas educativas de los ODS",
    justin: "Diseñador de contenido enfocado en los ODS 3 y 5",
    miguel: "Desarrollador web enfocado en el ODS 4",
    sdg_title: "Principios Clave de los ODS:",
    sdg_principles: "Los Objetivos de Desarrollo Sostenible (ODS) se guían por los siguientes principios clave:",
    sdg_principles_list: "", // handled in HTML
    better_future_title: "Construyendo un Futuro Mejor: Por Qué la Salud, Educación e Igualdad de Género Son Más Importantes que Nunca",
    better_future_intro: `Cuando hablamos de cambiar el mundo, puede parecer abrumador. ¿Por dónde empezar? 
    Los Objetivos de Desarrollo Sostenible (ODS) de las Naciones Unidas nos ofrecen una hoja de ruta, y tres de esos objetivos nos tocan muy de cerca:
    Salud y Bienestar, Educación de Calidad e Igualdad de Género.`,
    better_future_body: "Estos objetivos no son solo visiones idealistas — son reales, urgentes y necesarios para construir un futuro más justo y equitativo.",
    project_title: "Resumen del Proyecto",
    project_overview: "Este blog forma parte de un proyecto colaborativo entre la Universidad del Noreste y Mercy University, enfocado en los Objetivos de Desarrollo Sostenible (ODS). Nuestro objetivo es crear conciencia y promover acciones para alcanzarlos.",
    uni_title: "Universidades Participantes",
    rights: "Todos los derechos reservados."
  }
};

let currentLang = "en";

document.getElementById("langBtn").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "es" : "en";
  switchLanguage();
});

function switchLanguage() {
  const elements = document.querySelectorAll("[data-key]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-key");
    const translation = translations[currentLang][key];
    if (translation !== undefined) {
      el.textContent = translation;
    }
  });

  const langBtn = document.getElementById("langBtn");
  langBtn.textContent = currentLang === "en" ? "ES 🇪🇸" : "EN 🇬🇧";
}
