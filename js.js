(() => {
  const refs = {
    openMenulBtn: document.querySelector(".button-menu"),
    closeMenulBtn: document.querySelector(".backdrop-close__btn"),
    menu: document.querySelector(".backdrop"),
  };

  refs.openMenulBtn.addEventListener("click", toggleMenu);
  refs.closeMenulBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("hidden");
  }
})();
