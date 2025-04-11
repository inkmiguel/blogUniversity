const translations = {
    es: {
      title: "Salud y Bienestar",
      intro: "Garantizar vidas saludables y promover el bienestar para todos en todas las edades es esencial para el desarrollo sostenible.",
      goal_overview: "Visión General del Objetivo",
      overview: "El ODS 3 busca garantizar una vida saludable y promover el bienestar para todos en todas las edades. Esto incluye reducir la tasa de mortalidad materna, poner fin a las muertes prevenibles de recién nacidos y niños, abordar problemas de salud mental, promover estilos de vida saludables y aumentar el acceso a la atención médica asequible.",
      life_expectancy_title: "Esperanza de Vida",
      life_expectancy_intro: "La esperanza de vida es uno de los indicadores de salud más importantes a nivel global. El siguiente gráfico muestra la esperanza de vida de varios países con los promedios más altos y bajos.",
      infant_mortality_title: "Tasa de Mortalidad Infantil",
      infant_mortality_intro: "La tasa de mortalidad infantil es un indicador clave del sistema de salud de un país. El siguiente gráfico compara los países con las tasas más altas y bajas de mortalidad infantil.",
      health_access_title: "Acceso a Servicios de Salud",
      health_access_intro: "El acceso a los servicios de salud es esencial para mejorar los resultados de salud. Aquí hay una comparación de los países con el mejor y el peor acceso a la atención médica.",
      case_study: "Estudio de Caso: Mejorando la Salud en Áreas Rurales",
      case_study_text: "Un ejemplo exitoso es la implementación de clínicas móviles de salud en áreas rurales. Estas clínicas llevan los servicios de salud directamente a las comunidades, mejorando el acceso a la atención primaria y reduciendo las enfermedades prevenibles. Este modelo ha mostrado éxito en países como India y Kenia.",
      rights: "Todos los derechos reservados."
    },
    en: {
      title: "Good Health and Well-Being",
      intro: "Ensuring healthy lives and promoting well-being for all at all ages is essential to sustainable development.",
      goal_overview: "Goal Overview",
      overview: "The SDG 3 aims to ensure healthy lives and promote well-being for all at all ages. This includes reducing the maternal mortality ratio, ending preventable deaths of newborns and children, addressing mental health issues, promoting healthy lifestyles, and increasing access to affordable healthcare.",
      life_expectancy_title: "Life Expectancy",
      life_expectancy_intro: "Life expectancy is one of the most important health indicators globally. The following chart shows the life expectancy of several countries with the highest and lowest averages.",
      infant_mortality_title: "Infant Mortality Rate",
      infant_mortality_intro: "The infant mortality rate is a key indicator of a nation's healthcare system. The following chart compares countries with the highest and lowest infant mortality rates.",
      health_access_title: "Access to Health Services",
      health_access_intro: "Access to healthcare services is essential to improving health outcomes. Here is a comparison of countries with the best and worst access to healthcare.",
      case_study: "Case Study: Improving Health in Rural Areas",
      case_study_text: "A successful example is the implementation of mobile health clinics in rural areas. These clinics bring healthcare services directly to communities, improving access to primary care and reducing preventable diseases. This model has shown success in countries like India and Kenya.",
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
      labels: ['Japan 🇯🇵', 'Switzerland 🇨🇭', 'Singapore 🇸🇬', 'Chad 🇹🇩', 'Lesotho 🇱🇸', 'Central African Republic 🇨🇫'],
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