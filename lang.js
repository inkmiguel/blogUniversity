const translations = {
    en: {
      welcome: "Welcome to Our SDG Blog",
      team: "Team Members",
      universities: "Universities Involved",
      health: "Good Health and Well-Being",
      education: "Quality Education",
      gender: "Gender Equality"
    },
    es: {
      welcome: "Bienvenidos a Nuestro Blog de ODS",
      team: "Miembros del Equipo",
      universities: "Universidades Involucradas",
      health: "Salud y Bienestar",
      education: "Educación de Calidad",
      gender: "Igualdad de Género"
    }
  };
  
  function setLanguage(lang) {
    document.getElementById("title").textContent = translations[lang].welcome;
    document.getElementById("team-title").textContent = translations[lang].team;
    document.getElementById("university-title").textContent = translations[lang].universities;
    document.getElementById("health-title").textContent = translations[lang].health;
    document.getElementById("education-title").textContent = translations[lang].education;
    document.getElementById("gender-title").textContent = translations[lang].gender;
  }
  