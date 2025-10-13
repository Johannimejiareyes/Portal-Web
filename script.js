// Cargar navbar dinámicamente
fetch("navbar.html")
  .then(res => res.text())
  .then(data => {
      document.getElementById("navbar").innerHTML = data;

      // Seleccionar elementos del navbar cargado
      const btnMenu = document.getElementById("btnMenu");
      const NavBarLink = document.getElementById("NavBarLink");

      // Evento para abrir/cerrar menú
      btnMenu.addEventListener("click", () => {
          NavBarLink.classList.toggle("active");
          if (NavBarLink.classList.contains("active")) {
              btnMenu.innerHTML = "X";
              btnMenu.setAttribute("aria-expanded", "true");
          } else {
              btnMenu.innerHTML = "☰";
              btnMenu.setAttribute("aria-expanded", "false");
          }
      });
  });



/*ESTUDIANTE SECCION*/

const toggleButton = document.getElementById("toggle-button");
const sidebar = document.getElementById("sidebar");

const openIcon = toggleButton.querySelector(".bxs-right-arrow");
const closeIcon = toggleButton.querySelector(".bxs-left-arrow");

closeIcon.style.display = "none";

toggleButton.addEventListener("click", () => {
  sidebar.classList.toggle("active");

  if (sidebar.classList.contains("active")) {
    openIcon.style.display = "none";
    closeIcon.style.display = "block";
  } else {
    openIcon.style.display = "block";
    closeIcon.style.display = "none";
  }
});
