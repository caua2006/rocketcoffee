const button = document.querySelector("button")
const body= document.querySelector("body")
button.addEventListener("click", change )
button.addEventListener("click",save)


function change() {
    body.classList.toggle("active")
    button.classList.toggle("active")
}
function save(){
    if (body.className === "active"){
        console.log("botão ativo")
        localStorage.setItem("salvo","active")
    } 
    else {
        localStorage.setItem("salvo","desactive")
    }
}

let mostrar = localStorage.getItem("salvo")
if ("active" === mostrar){
    body.classList.add("active")
    button.classList.add("active")
}
console.log(mostrar)


