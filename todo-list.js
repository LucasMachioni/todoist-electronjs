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

//Adicionando um evento de click para a tag <li>
criarTagLI.addEventListener('click', concluirTarefa)

//Criando uma tag em negrito
const tagRemover = `<i onclick='removerItem(event)' class="fa-solid fa-circle-minus icon" > </i>`

//Adicionando um texto para nossa tag li criada
criarTagLI.innerHTML = valorInput + tagRemover;

console.log(criarTagLI);

minhaTagUl.appendChild(criarTagLI)

}

const removerItem = (event)=> {

  //Pegando a tag <i> dentro do nosso event
  const meuIcone = event.target

  //Pegando a tag <li> através da minha tag <i> com propriedade parentElement
  const minhaLi = meuIcone.parentElement

  //Excluindo a tag <li> com a função remove()
  minhaLi.remove()

}

const concluirTarefa =(event) => {

  //pegando ag <li>
  const minhaTagLi = event.target

  minhaTagLi.className = "concluida" 
  

}