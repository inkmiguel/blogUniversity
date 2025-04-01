const translations = {
    es: {
        nav_home: "Inicio",
        nav_health: "Salud y Bienestar",
        nav_education: "Educación de Calidad",
        nav_gender: "Igualdad de Género",
        welcome: "Bienvenido a Nuestro Blog de ODS",
        intro: "Explora los objetivos globales clave y descubre cómo construir un futuro mejor juntos.",
        team_title: "👥 Miembros del Equipo",
        emily: "Coordinadora de proyecto e investigadora en iniciativas educativas de ODS.",
        justin: "Diseñador de contenido enfocado en ODS 3, 4, 5.",
        miguel: "Desarrollador web.",
        uni_title: "🏛️ Universidades Participantes",
        rights: "Todos los derechos reservados."
    },
    en: {
        nav_home: "Home",
        nav_health: "Good Health and Well-Being",
        nav_education: "Quality Education",
        nav_gender: "Gender Equality",
        welcome: "Welcome to Our SDG Blog",
        intro: "Explore key global goals and discover how we can build a better future together.",
        team_title: "👥 Team Members",
        emily: "Project coordinator and researcher on SDG education initiatives.",
        justin: "Content designer focused on SDG 3, 4, 5.",
        miguel: "Web developer.",
        uni_title: "🏛️ Participating Universities",
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