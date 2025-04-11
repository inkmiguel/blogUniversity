const translations = {
  es: {
    nav_home: "Inicio",
    nav_health: "Salud y Bienestar",
    nav_education: "Educación de Calidad",
    nav_gender: "Igualdad de Género",
    title: "Salud y Bienestar",
    intro: "Garantizar una vida sana y promover el bienestar para todos en todas las edades es esencial para el desarrollo sostenible.",
    goal_overview: "Descripción del Objetivo",
    overview:
      "La salud es la base de todo. No puedes concentrarte en tu educación o carrera si estás constantemente enfermo o si la atención médica está fuera de tu alcance. El ODS 3 busca garantizar que todas las personas, sin importar dónde vivan, tengan acceso a servicios de salud de calidad. Esto incluye combatir enfermedades como el VIH/SIDA y la malaria, mejorar el apoyo a la salud mental, reducir las tasas de mortalidad materna e infantil, y hacer que las vacunas y los medicamentos sean accesibles para todos. La pandemia de COVID-19 expuso grandes fallas en los sistemas de salud globales, pero también nos recordó cuán conectados estamos. Si queremos sociedades fuertes y resilientes, la salud debe ser una prioridad.",
    life_expectancy_title: "Esperanza de Vida",
    life_expectancy_intro:
      "La esperanza de vida es uno de los indicadores de salud más importantes a nivel mundial. El siguiente gráfico muestra la esperanza de vida en varios países con los promedios más altos y más bajos.",
    infant_mortality_title: "Tasa de Mortalidad Infantil",
    infant_mortality_intro:
      "La tasa de mortalidad infantil es un indicador clave del sistema de salud de una nación. El siguiente gráfico compara países con las tasas de mortalidad infantil más altas y más bajas.",
    health_access_title: "Acceso a Servicios de Salud",
    health_access_intro:
      "El acceso a los servicios de salud es esencial para mejorar los resultados en salud. Aquí se muestra una comparación de países con el mejor y peor acceso a la atención médica.",
    case_study: "Estudio de Caso: Mejorando la Salud en Zonas Rurales",
    case_study_text:
      "Un ejemplo exitoso es la implementación de clínicas móviles en zonas rurales. Estas clínicas llevan los servicios de salud directamente a las comunidades, mejorando el acceso a la atención primaria y reduciendo enfermedades prevenibles. Este modelo ha demostrado éxito en países como India y Kenia.",
    rights: "Todos los derechos reservados."
  },
  en: {
    nav_home: "Home",
    nav_health: "Good Health and Well-Being",
    nav_education: "Quality Education",
    nav_gender: "Gender Equality",
    title: "Good Health and Well-Being",
    intro: "Ensuring healthy lives and promoting well-being for all at all ages is essential to sustainable development.",
    goal_overview: "Goal Overview",
    overview:
      "Health is the foundation of everything. You can’t focus on your education or career if you're constantly battling illness or if healthcare is out of reach. SDG 3 is about making sure everyone, no matter where they live, has access to quality healthcare services. That means fighting diseases like HIV/AIDS and malaria, improving mental health support, reducing maternal and infant mortality rates, and making vaccines and medicines accessible to all. The COVID-19 pandemic exposed major cracks in global health systems, but it also reminded us how connected we all are. If we want strong, resilient societies, health has to come first.",
    life_expectancy_title: "Life Expectancy",
    life_expectancy_intro:
      "Life expectancy is one of the most important health indicators globally. The following chart shows the life expectancy of several countries with the highest and lowest averages.",
    infant_mortality_title: "Infant Mortality Rate",
    infant_mortality_intro:
      "The infant mortality rate is a key indicator of a nation's healthcare system. The following chart compares countries with the highest and lowest infant mortality rates.",
    health_access_title: "Access to Health Services",
    health_access_intro:
      "Access to healthcare services is essential to improving health outcomes. Here is a comparison of countries with the best and worst access to healthcare.",
    case_study: "Case Study: Improving Health in Rural Areas",
    case_study_text:
      "A successful example is the implementation of mobile health clinics in rural areas. These clinics bring healthcare services directly to communities, improving access to primary care and reducing preventable diseases. This model has shown success in countries like India and Kenya.",
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


  // Life Expectancy Chart
  const lifeExpectancyChart = new Chart(document.getElementById('lifeExpectancyChart'), {
    type: 'bar',
    data: {
      labels: ['Japan', 'Switzerland', 'Singapore', 'Chad', 'Lesotho', 'Central African Republic'],
      datasets: [{
        label: 'Life Expectancy (Years)',
        data: [84.5, 83.5, 83.3, 54.3, 54.9, 53.0],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: { beginAtZero: true }
      }
    }
  });

  // Infant Mortality Chart
  const infantMortalityChart = new Chart(document.getElementById('infantMortalityChart'), {
    type: 'bar',
    data: {
      labels: ['Japan 🇯🇵', 'Finland 🇫🇮', 'Iceland 🇮🇸', 'Sierra Leone 🇸🇱', 'Nigeria 🇳🇬', 'Central African Republic 🇨🇫'],
      datasets: [{
        label: 'Infant Mortality Rate (per 1,000 live births)',
        data: [1.9, 2.3, 2.3, 91.5, 69.8, 87.7],
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: { beginAtZero: true }
      }
    }
  });

  // Health Access Chart
  const healthAccessChart = new Chart(document.getElementById('healthAccessChart'), {
    type: 'bar',
    data: {
      labels: ['Germany 🇩🇪', 'Canada 🇨🇦', 'Australia 🇦🇺', 'Haiti 🇭🇹', 'Ethiopia 🇪🇹', 'Afghanistan 🇦🇫'],
      datasets: [{
        label: 'Access to Healthcare (%)',
        data: [99, 98, 98, 45, 55, 40],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: { beginAtZero: true }
      }
    }
  });