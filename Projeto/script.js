const titulo = document.getElementById("titulo");
const btnTrocarTexto = document.getElementById("btnTrocarTexto");

btnTrocarTexto.addEventListener("click", function() {
    titulo.textContent = "O titulo foi alterado via DOM";
});

const descricoes = document.getElementsByClassName("descricao");
const btnDestaque = document.getElementById("btnDestaque");

btnDestaque.addEventListener("click", function(){
    for (let item of descricoes){
        item.classList.toggle("highlight");
    }
});

const btnQuery = document.getElementById("btnQuery");

btnQuery.addEventListener("click", function() {
    const primeiroParagrafo = document.querySelector("container p");
    primeiroParagrafo.computedStyleMap.color = "red";
});