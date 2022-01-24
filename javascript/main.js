let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click",()=>{
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
});

let next = document.getElementById("next");
let prev = document.getElementById("prev");
let slides = document.querySelectorAll(".slide-container");
let index = 0;

next.addEventListener("click",()=>{
    slides[index].classList.remove("active");
    index =(index +1) % slides.length;
    slides[index].classList.add("active");
});

prev.addEventListener("click",()=>{
    slides[index].classList.remove("active");
    index =(index - 1 + slides.length) % slides.length;
    slides[index].classList.add("active");
});