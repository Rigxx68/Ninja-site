//выпадение меню
$(function show_Menu() {
    $('.btn').click(function (){
      $(".dropdown-content").slideToggle(500);
      });
});
$(function showMenu() {
    $('.left_btn').click(function (){
      $(".left-content").slideToggle(500);
      });
});

//клик вне меню -> меню прячется
window.addEventListener("click", function(event) {
    
      if (!event.target.matches('.btn')) {
            let dropdowns = document.getElementsByClassName("dropdown-content");
            let i;
            for (i = 0; i < dropdowns.length; i++) {
              let openDropdown = dropdowns[i];
              if (openDropdown.classList.contains('show')) {
                $(".dropdown-content").slideUp(500);
              }
            }
      }  
});
window.addEventListener("click", function(event) {
      if (!event.target.matches('.left_btn') && !event.target.matches('.fa-bars')) {          
            let left_dropdowns = document.getElementsByClassName("left-content");
                let a;
                for (a = 0; a < left_dropdowns.length; a++) {
                  let openLeftDropdown = left_dropdowns[a];
                  if (openLeftDropdown.classList.contains('show')) {
                    $(".left-content").slideUp(500);
                  }
                }
      }  
});

