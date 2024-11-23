let menuIcon = document.querySelector(".hamburger-button")
let navlinks = document.querySelector(".navlinks")
let buttons = document.querySelector(".buttons")

menuIcon.addEventListener("click",()=>{
    navlinks.classList.toggle("open") ;
    buttons.classList.toggle("open") ;
})