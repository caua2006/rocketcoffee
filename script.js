const menuAberto = document.querySelector("#menu-open")
const menuClose = document.querySelector("#menu-close")
const menu = document.querySelector(".menu-mobile")

menuAberto.addEventListener("click",menuOpen)
menuClose.addEventListener("click",menuOpen)

function menuOpen(){
    menu.classList.toggle("active")
    menuAberto.classList.toggle("active")
    menuClose.classList.toggle("active")
}

