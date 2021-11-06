var nav = document.querySelector("nav");
var navToggler = document.getElementsByClassName("navbar-toggler");
var bandera = true;
//Para que el navBar cambie de background al hacer scroll.
window.addEventListener("scroll", ()=>{
    if (window.pageYOffset > 90){
        nav.classList.add("bg-white", "shadow");
    }else if (bandera) {
        nav.classList.remove("bg-white", "shadow");
    }
});
//Para que el navBar cambie el backgraund al hacer click en el menu hamburgesa cuando NO se hizo scroll.
navToggler[0].addEventListener("click",()=>{
    bandera = !bandera;
    if (window.pageYOffset < 90){
        nav.classList.toggle("bg-white");
        nav.classList.toggle("shadow");  
    }
});