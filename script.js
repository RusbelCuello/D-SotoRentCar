// Selecciona el icono de hamburguesa y la nav principal
const menuToggle = document.getElementById("menu-toggle");
const navMain = document.querySelector(".nav-main");

// Escucha clic en el icono
menuToggle.addEventListener("click", () => {
    navMain.classList.toggle("show"); // alterna clase "show"
});