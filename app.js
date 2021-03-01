let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".navigation");
mobileMenu.addEventListener("click",function(){
    mobileMenu.classList.toggle("active-menu");
if (mobileMenu.classList.contains("active-menu")){
    mainMenu.classList.add("active-menu")
} else {
    mainMenu.classList.remove("active-menu")
}

})


$(".slider-block").slick({
    dots:true
});

$(document).ready(function(){
    $(".seit_navigation").on("click","a", function (event) {

      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
      //анимируем переход на расстояние - top за 1500 мс
      $('body,html').animate({scrollTop: top}, 1500);
    });
  });