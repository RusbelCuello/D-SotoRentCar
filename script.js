// Selecciona el icono de hamburguesa y la nav principal
const menuToggle = document.getElementById("menu-toggle");
const navMain = document.querySelector(".nav-main");
const navLinks = document.querySelectorAll(".nav-main a");

// Escucha clic en el icono
menuToggle.addEventListener("click", () => {
  navMain.classList.toggle("show"); // alterna clase "show"
});

// Cerrar menú cuando haces clic en un enlace
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMain.classList.remove("show");
    menuToggle.classList.remove("active");
  });
});

// ======== ANIMACIÓN SUAVE AL HACER SCROLL ========
// Parallax suave en el hero
const hero = document.querySelector(".hero");
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  // Parallax muy ligero del hero
  if (hero) {
    hero.style.backgroundPosition = `center ${scrollY * 0.3}px`;
  }

  // Fade sutil del indicador de scroll
  const scrollIndicator = document.querySelector(".scroll-indicator");
  if (scrollIndicator) {
    const opacity = Math.max(0, 1 - scrollY / 500);
    scrollIndicator.style.opacity = opacity;
  }
});

// Fade in suave de elementos cuando entran en vista
const observerOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observar tarjetas
document.querySelectorAll(".carro").forEach((carro) => {
  carro.classList.add("fade-in");
  observer.observe(carro);
});

// Observar título
const titulo = document.querySelector(".vehiculos-titulo");
if (titulo) {
  titulo.classList.add("fade-in");
  observer.observe(titulo);
}

// Observar sección de contacto
const contacto = document.querySelector("#contacto");
if (contacto) {
  contacto.classList.add("fade-in");
  observer.observe(contacto);
}
