const translations = {
    es: {
      nav_home: "Inicio",
      nav_health: "Salud y Bienestar",
      nav_education: "Educación de Calidad",
      nav_gender: "Igualdad de Género",
      welcome: "Bienvenido a Nuestro Blog de ODS",
      intro: "Explora los objetivos globales clave y descubre cómo construir un futuro mejor juntos.",
      about_title: "Sobre los ODS",
      about_intro:
        "Los Objetivos de Desarrollo Sostenible (ODS), también llamados Objetivos Globales, fueron introducidos por las Naciones Unidas en 2015 como un esfuerzo mundial para abordar grandes desafíos como la pobreza, la desigualdad y el cambio climático para 2030. Son 17 objetivos en total, y todos están conectados: el progreso en un área suele apoyar el progreso en otras. La idea central es promover un desarrollo sostenible en lo social, económico y ambiental. Una gran parte del compromiso es ayudar primero a quienes están más desfavorecidos. Los ODS buscan erradicar la pobreza extrema, el hambre, el SIDA y la discriminación de género. Alcanzar estos objetivos no es solo tarea de los gobiernos, también requiere creatividad, conocimiento, tecnología y apoyo financiero de personas y comunidades de todo el mundo.",
      team_title: "Miembros del Equipo",
      emily: "Coordinadora de proyecto e investigadora en iniciativas educativas de ODS.",
      justin: "Diseñador de contenido enfocado en ODS 3, 4, 5.",
      miguel: "Desarrollador web.",
      sdg_title: "Los Principios Clave de los ODS:",
      sdg_principles: "Los Objetivos de Desarrollo Sostenible (ODS) se guían por los siguientes principios clave:",
      sdg_principles_list: "", // Se mantiene vacío si no vas a traducir individualmente cada <li>
      better_future_title: "Construyendo un Futuro Mejor: Por qué la Salud, la Educación y la Igualdad de Género Importan Más que Nunca",
      better_future_intro: "Cuando hablamos de cambiar el mundo, puede parecer abrumador. ¿Por dónde empezamos? Los Objetivos de Desarrollo Sostenible (ODS) de las Naciones Unidas nos dan una hoja de ruta, y tres de esos objetivos son especialmente importantes: Salud y Bienestar, Educación de Calidad e Igualdad de Género.",
      better_future_body: "Estos objetivos no son solo visiones idealistas; son reales, urgentes y necesarios para construir un futuro mejor y más equitativo.",
      project_title: "Resumen del Proyecto",
      project_overview: "Este blog es parte de un proyecto colaborativo entre la Universidad del Noreste y Mercy University, enfocado en los Objetivos de Desarrollo Sostenible (ODS). Nuestro objetivo es crear conciencia y promover acciones para alcanzar estos objetivos.",
      uni_title: "Universidades Participantes",
      rights: "Todos los derechos reservados."
    },
    en: {
      nav_home: "Home",
      nav_health: "Good Health and Well-Being",
      nav_education: "Quality Education",
      nav_gender: "Gender Equality",
      welcome: "Welcome to Our SDG Blog",
      intro: "Explore key global goals and discover how we can build a better future together.",
      about_title: "About SDG",
      about_intro:
        "The Sustainable Development Goals (SDGs), also called the Global Goals, were introduced by the United Nations in 2015 as a worldwide effort to tackle major challenges like poverty, inequality, and climate change by 2030. There are 17 goals in total, and they’re all connected—progress in one area often supports progress in others. The whole idea is to promote development that’s socially, economically, and environmentally sustainable. A big part of the commitment is to help those who are the most disadvantaged first. The SDGs aim to end things like extreme poverty, hunger, AIDS, and gender-based discrimination. Reaching these goals isn’t just up to governments—it’s going to take creativity, knowledge, tech, and financial support from people and communities everywhere.",
      team_title: "Team Members",
      emily: "Project coordinator and researcher on SDG education initiatives.",
      justin: "Content designer focused on SDG 3, 4, 5.",
      miguel: "Web developer.",
      sdg_title: "The Key Principles of the SDGs:",
      sdg_principles: "The Sustainable Development Goals (SDGs) are guided by the following key principles:",
      sdg_principles_list: "", // Same here, you can break this into parts if you want full control
      better_future_title: "Building a Better Future: Why Health, Education, and Gender Equality Matter More Than Ever",
      better_future_intro: "When we talk about changing the world, it can feel overwhelming. Where do we even start? The United Nations’ Sustainable Development Goals (SDGs) give us a roadmap, and three of those goals hit especially close to home: Good Health and Well-Being, Quality Education, and Gender Equality.",
      better_future_body: "These goals aren’t just idealistic visions—they’re real, urgent, and necessary for building a better, more equal future.",
      project_title: "Project Overview",
      project_overview: "This blog is part of a collaborative project between Universidad del Noreste and Mercy University, focusing on the Sustainable Development Goals (SDGs). Our aim is to raise awareness and promote action towards achieving these goals.",
      uni_title: "Participating Universities",
      rights: "All rights reserved."
    }
  };
  
  let currentLang = "en";
  
  document.getElementById("langBtn").addEventListener("click", () => {
    currentLang = currentLang === "en" ? "es" : "en";
    document.getElementById("langBtn").innerText = currentLang === "en" ? "ES 🇪🇸" : "EN 🇬🇧";
    document.querySelectorAll("[data-key]").forEach(el => {
      const key = el.getAttribute("data-key");
      if (translations[currentLang][key]) {
        el.textContent = translations[currentLang][key];
      }
    });
  });
  