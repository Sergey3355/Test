(() => {
  const refs = {
    openMenulBtn: document.querySelector(".btn-mob"),
    menu: document.querySelector(".mob-menu"),
  };

  refs.openMenulBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("hidden");
  }
})();
