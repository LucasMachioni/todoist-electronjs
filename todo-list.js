const adicionarItemPelaTecla = (event) => {
  //Pegando o tipo da tecla pelo evento
  const tecla = event.key;

  //Verificando se a tecla pressionada é o Enter
if(tecla === "Enter") {
  //Chamando a função responsável por adicionar item
 adicionarItem()

//encerra o IF, porém não está sendo utilizado aqui, pois não temos nada abaixo do IF, apenas por demonstração
  return;
  }
}

adicionarItem = ()=> {
const valorInput = document.getElementById("oi").value

//Pegado a tag UL do nosso HTML pelo ID
const minhaTagUl = document.getElementById("lista-de-tarefas")

//Criando a tag LI com JavaScript
const criarTagLI = document.createElement("li")

//Criando uma tag em negrito
const tagRemover = "<b onclick='removerItem(event)' > Remover </b>"

//Adicionando um texto para nossa tag li criada
criarTagLI.innerHTML = valorInput + tagRemover;

console.log(criarTagLI);

minhaTagUl.appendChild(criarTagLI)

console.log('é')

}

const removerItem = (event)=> {

  //Pegando a tag <b> dentro do nosso evento
  const tagRemover = event.target;

  console.log("Cliquei na função remover")

  console.log(tagRemover)
}