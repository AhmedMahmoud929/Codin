let navOpen = document.querySelector("nav .fa-bars");
let navClose = document.querySelector("nav #nav-phone .fa-xmark");
let navPhone = document.querySelector("nav #nav-phone");

navOpen.addEventListener("click",()=>{
     navPhone.classList.add("active");
})
navClose.addEventListener("click",()=>{
     navPhone.classList.remove("active");
})

let mainNav = document.querySelector("nav .container");
window.onscroll = ()=>{
     if (this.scrollY>=70){
          mainNav.classList.add("active");
     }
     else mainNav.classList.remove("active");
}