const translations = {
    es: {
      title: "Igualdad de Género",
      intro: "Lograr la igualdad de género y empoderar a todas las mujeres y niñas.",
      goal_overview: "Visión General del Objetivo",
      overview: "El ODS 5 tiene como objetivo lograr la igualdad de género y empoderar a todas las mujeres y niñas. Busca acabar con todas las formas de discriminación, violencia y prácticas nocivas, así como garantizar la participación igualitaria en roles de liderazgo, el acceso a la educación y los recursos económicos.",
      gender_gap_title: "Brecha de Género en la Educación",
      gender_gap_intro: "A pesar de los avances significativos, persisten las disparidades de género en la educación. Esta sección analiza la brecha de género en el acceso a la educación en diferentes países.",
      gender_pay_gap_title: "Brecha Salarial de Género",
      gender_pay_gap_intro: "La brecha salarial de género sigue siendo un problema significativo en todo el mundo. Este gráfico muestra las diferencias en los ingresos promedio entre hombres y mujeres en varios países.",
      women_in_leadership_title: "Mujeres en el Liderazgo",
      women_in_leadership_intro: "La participación de las mujeres en roles de liderazgo es esencial para lograr la igualdad de género. Esta sección explora el estado actual de las mujeres en el liderazgo político y empresarial.",
      case_study: "Estudio de Caso: Igualdad de Género en Islandia",
      case_study_text: "Islandia ha logrado avances significativos hacia la igualdad de género, ocupando constantemente el primer lugar en el mundo en cuanto a los derechos de las mujeres. Sus políticas sobre igualdad salarial, licencia parental y representación política han conducido a mejores resultados de igualdad de género.",
      rights: "Todos los derechos reservados."
    },
    en: {
      title: "Gender Equality",
      intro: "Achieving gender equality and empowering all women and girls.",
      goal_overview: "Goal Overview",
      overview: "SDG 5 aims to achieve gender equality and empower all women and girls. It seeks to end all forms of discrimination, violence, and harmful practices, as well as ensuring equal participation in leadership roles, access to education, and economic resources.",
      gender_gap_title: "Gender Gap in Education",
      gender_gap_intro: "Despite significant progress, gender disparities in education still persist. This section looks at the gender gap in education access across different countries.",
      gender_pay_gap_title: "Gender Pay Gap",
      gender_pay_gap_intro: "The gender pay gap continues to be a significant issue worldwide. This chart shows the differences in average earnings between men and women in various countries.",
      women_in_leadership_title: "Women in Leadership",
      women_in_leadership_intro: "Women's participation in leadership roles is essential for achieving gender equality. This section explores the current state of women in political and business leadership.",
      case_study: "Case Study: Gender Equality in Iceland",
      case_study_text: "Iceland has made significant strides toward gender equality, consistently ranking as one of the best countries for women’s rights. Its policies on equal pay, parental leave, and political representation have led to higher gender equality outcomes.",
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

  // Gender Gap Chart
  const genderGapChart = new Chart(document.getElementById('genderGapChart'), {
    type: 'bar',
    data: {
      labels: ['Norway 🇳🇴', 'Iceland 🇮🇸', 'Finland 🇫🇮', 'India 🇮🇳', 'South Africa 🇿🇦'],
      datasets: [{
        label: 'Gender Gap in Education (%)',
        data: [2, 3, 4, 12, 25],
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

  // Gender Pay Gap Chart
  const genderPayGapChart = new Chart(document.getElementById('genderPayGapChart'), {
    type: 'bar',
    data: {
      labels: ['Iceland 🇮🇸', 'Norway 🇳🇴', 'Finland 🇫🇮', 'USA 🇺🇸', 'Japan 🇯🇵'],
      datasets: [{
        label: 'Gender Pay Gap (%)',
        data: [4, 6, 7, 20, 25],
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

  // Women in Leadership Chart
  const womenLeadershipChart = new Chart(document.getElementById('womenLeadershipChart'), {
    type: 'bar',
    data: {
      labels: ['Finland 🇫🇮', 'New Zealand 🇳🇿', 'Rwanda 🇷🇼', 'USA 🇺🇸', 'Saudi Arabia 🇸🇦'],
      datasets: [{
        label: 'Women in Leadership (%)',
        data: [40, 50, 61, 25, 10],
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