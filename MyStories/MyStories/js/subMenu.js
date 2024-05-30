function mostrarSubmenu(elemento) {

  const submenuId = elemento.getAttribute("data-id");
  const submenu = document.getElementById("submenu" + submenuId);

  const principalContent = document.querySelector(".principal-content");

  if (submenu.style.display === "grid") {

    submenu.style.display = "none";
    principalContent.classList.remove("active"); // Quita la clase "active"
  } else {

    const submenus = document.querySelectorAll(".submenu");
    for (const sub of submenus) {

      sub.style.display = "none";
    }
    submenu.style.display = "grid";
    principalContent.classList.add("active"); // Agrega la clase "active"
  }
}







