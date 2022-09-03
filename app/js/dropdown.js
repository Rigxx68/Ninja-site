function showMenu() {
    document.getElementById("leftDropdown").classList.toggle("show");
}

function show_Menu() {
    document.getElementById("Dropdown").classList.toggle("show");
}
// закрыть меню если кликаешь мимо
window.addEventListener("click", function(event) {
  if (!event.target.matches('.btn')) {

    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
});