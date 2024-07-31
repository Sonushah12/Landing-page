let daynight = document.querySelector(".daynight");
let banner = document.querySelector(".banner");


daynight.addEventListener("click",()=>{
    banner.classList.toggle("night")
})


let typing = new Typed('#text', {
    strings : ["Sonu", "Coder", "Gamer"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    showCursor: false
})

let dots = new Typed(".dots", {
    strings: ["........."],
    loop: true,
    typeSpeed:100,
    backSpeed:50,
    backDelay:1000,
    showCursor: false 
})


const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});