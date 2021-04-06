const d = document;

function hamburguerMenu() {
  const $menuContainer = document.querySelector(".menu-container");

  d.addEventListener("click", (e) => {
    if (e.target.matches(".menu-btn")) {
      $menuContainer.classList.toggle("is-active");
    }
  });
}

hamburguerMenu();
