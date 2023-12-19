const elHamburger = document.querySelector(".js-hamburger");
const elHeaderNav = document.querySelector(".js-header-nav");

elHamburger.addEventListener("click",()=>{
    elHamburger.classList.toggle("hamburger--active");
    elHeaderNav.classList.toggle("header__nav--active");
})