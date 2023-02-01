const menu = document.querySelector("#Menu")
const sidebar = document.querySelector(".sidebar")
menu.addEventListener("click",openMenu)


function openMenu(){
    sidebar.classList.toggle("active")
    console.log("foi")
}