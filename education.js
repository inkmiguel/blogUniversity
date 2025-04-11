const translations = {
    es: {
      title: "Educación de Calidad",
      intro: "Garantizar una educación inclusiva, equitativa y de calidad y promover oportunidades de aprendizaje durante toda la vida para todos.",
      goal_overview: "Visión General del Objetivo",
      overview: "El ODS 4 busca garantizar una educación inclusiva y equitativa de calidad y promover oportunidades de aprendizaje a lo largo de toda la vida para todos. Este objetivo es crucial para el desarrollo de individuos, comunidades y sociedades. Incluye garantizar la educación primaria y secundaria gratuita, eliminar las disparidades de género y aumentar el número de jóvenes y adultos con habilidades relevantes para el empleo.",
      education_access_title: "Acceso a la Educación",
      education_access_intro: "El acceso a la educación es un derecho fundamental y un factor clave para el desarrollo social y económico. En esta sección, exploraremos las disparidades en el acceso a la educación en diferentes regiones.",
      literacy_rates_title: "Tasas de Alfabetización",
      literacy_rates_intro: "Las tasas de alfabetización son un indicador clave de la efectividad de los sistemas educativos. El siguiente gráfico compara las tasas de alfabetización en varios países.",
      education_expenditure_title: "Gasto en Educación",
      education_expenditure_intro: "El gasto en educación es crucial para garantizar la calidad de los sistemas educativos. El siguiente gráfico compara el porcentaje del PIB destinado a la educación en varios países.",
      case_study: "Estudio de Caso: Reforma Educativa en Finlandia",
      case_study_text: "Finlandia ha implementado un sistema educativo de renombre mundial. Al enfocarse en la igualdad, la autonomía de los profesores y el aprendizaje a lo largo de la vida, Finlandia ha creado un sistema que proporciona educación de alta calidad a todos los estudiantes, independientemente de su origen o nivel de ingresos.",
      rights: "Todos los derechos reservados."
    },
    en: {
      title: "Quality Education",
      intro: "Ensuring inclusive, equitable, and quality education and promoting lifelong learning opportunities for all.",
      goal_overview: "Goal Overview",
      overview: "SDG 4 aims to ensure inclusive and equitable quality education and promote lifelong learning opportunities for all. This goal is critical for the development of individuals, communities, and societies. It includes ensuring free primary and secondary education, eliminating gender disparities, and increasing the number of youth and adults with relevant skills for employment.",
      education_access_title: "Access to Education",
      education_access_intro: "Access to education is a fundamental right and a key driver of social and economic development. In this section, we will explore the disparities in education access across different regions.",
      literacy_rates_title: "Literacy Rates",
      literacy_rates_intro: "Literacy rates are a key indicator of the effectiveness of education systems. The following chart compares literacy rates in various countries.",
      education_expenditure_title: "Education Expenditure",
      education_expenditure_intro: "Education expenditure is crucial for ensuring the quality of education systems. The following chart compares the percentage of GDP spent on education in various countries.",
      case_study: "Case Study: Educational Reform in Finland",
      case_study_text: "Finland has implemented a world-renowned education system. By focusing on equality, teacher autonomy, and lifelong learning, Finland has created a system that provides high-quality education to all students, regardless of their background or income level.",
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

  // Education Access Chart
  const educationAccessChart = new Chart(document.getElementById('educationAccessChart'), {
    type: 'bar',
    data: {
      labels: ['Norway 🇳🇴', 'Sweden 🇸🇪', 'Finland 🇫🇮', 'Afghanistan 🇦🇫', 'Niger 🇳🇪', 'Chad 🇹🇩'],
      datasets: [{
        label: 'Access to Education (%)',
        data: [99, 98, 97, 45, 40, 30],
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

  // Literacy Rates Chart
  const literacyRatesChart = new Chart(document.getElementById('literacyRatesChart'), {
    type: 'bar',
    data: {
      labels: ['Finland 🇫🇮', 'Denmark 🇩🇰', 'Japan 🇯🇵', 'Afghanistan 🇦🇫', 'India 🇮🇳'],
      datasets: [{
        label: 'Literacy Rate (%)',
        data: [99.9, 99.2, 99.0, 38.2, 74.4],
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

  // Education Expenditure Chart
  const educationExpenditureChart = new Chart(document.getElementById('educationExpenditureChart'), {
    type: 'bar',
    data: {
      labels: ['Norway 🇳🇴', 'United States 🇺🇸', 'Germany 🇩🇪', 'Brazil 🇧🇷', 'India 🇮🇳'],
      datasets: [{
        label: 'Expenditure on Education (% of GDP)',
        data: [6.8, 5.0, 4.2, 5.1, 3.1],
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