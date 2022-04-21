adicionarItem = ()=> {
const valorInput = "Minha primeira tarefa";

//Pegado a tag UL do nosso HTML pelo ID
const minhaTagUl = document.getElementById("lista-de-tarefas")

//Criando a tag LI com JavaScript
const criarTagLI = document.createElement("li")

//Adicionando um texto para nossa tag li criada
criarTagLI.innerText = valorInput

minhaTagUl.appendChild(criarTagLI)

console.log("ENTROU NA FUNÇÃO ADICIONAR ITEM");
}
