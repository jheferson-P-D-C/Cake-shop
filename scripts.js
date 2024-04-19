const buttonimgBack = document.querySelector("#buttonimgBack")
const buttonimgRun = document.querySelector("#buttonimgRun")
const imgcake = document.querySelector(".imgcake")
const nameCake = document.querySelector("#nameCake")
const ValueCake = document.querySelector("#ValueCake")

const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi0-NkDdDgKlX1LY3K_teJ3i3_fwHAs8CI8g&usqp=CAU",
    "https://cantinhodereceitas.com.br/wp-content/uploads/2024/01/Bolo-Mesclado-TC.png",
    "https://www.innovarebolos.com.br/wp-content/uploads/2022/10/20221004_182019-1.jpg"
]
const names = [
    
    "Bolo de Chocolate com morango",
    "Bolo Mesclado",
    "Bolo de Brigadeiro"
]
const Valor = [
    "R$ 40,00",
    "R$ 20,00",
    "R$ 70,00"
]

let indiceAtual = 0

function exibirItens(){
    imgcake.src = images[indiceAtual]
    nameCake.innerHTML = names[indiceAtual]
    ValueCake.innerHTML = Valor[indiceAtual]
}
buttonimgRun.addEventListener("click", ()=>{
    indiceAtual++
    if(indiceAtual >= images.length && names.length && Valor.length){
        indiceAtual = 0
    }
    exibirItens()
})
buttonimgBack.addEventListener("click", ()=>{
    indiceAtual--
    if(indiceAtual < 0){
        indiceAtual = images.length -1
    }
    exibirItens()
})
exibirItens()

// Pesquisa
const pesquisar = document.querySelector(".pesquisa")
pesquisar.addEventListener("click", ()=>{
})