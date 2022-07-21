var slideIndex = 1; //пусть индекс 1го слайда = 1

showSlides(slideIndex); //Вызываем функцию, которая реализована ниже

function nextSlide() {
    showSlides(slideIndex += 1); // Увеличиваем индекс на 1 — показываем следующий слайд
}

function previousSlide() {
    showSlides(slideIndex -= 1); // Уменьшаем на 1 — предыдущий
}

function currentSlide(n) {
    showSlides(slideIndex = n); //текущий слайд
}

/* Функция перелистывания */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item"); //картинки - в переменной
    var dots = document.getElementsByClassName("slider-dots_item"); //кружочки - в переменной

    /* пускаем слайды по кругу */
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) { 
        slides[i].style.display = "none"; //Скрываем все слайды
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); //делает остальные кружочки неактивными (серыми)
    }
    
    slides[slideIndex - 1].style.display = "block"; //Делает нынешний элемент видимым
    dots[slideIndex - 1].className += " active"; //делает нынешний кружочек активным (красным)
}