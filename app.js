//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//CRIANDO AS FUNCIONALIDADES DA APLICAÇÃO

//CRIAÇÃO DAS VARIÁVEIS

let amigo = document.getElementById('resultado')
let nome = document.getElementById('amigo').value
let listaAmigo = document.getElementById('listaAmigos')
let listaNomes = []
let index
let amigoIndex
let amigoSecreto

//ADICIONAR NOMES:
function adicionarAmigo() {
  nome = document.getElementById('amigo').value
  listaAmigo = document.getElementById('listaAmigos')
  if (nome) {
    listaNomes.push(nome)
    listaAmigo.innerText = `${listaNomes}`
  } else if (nome.value == null) {
    validarEntrada(nome)
  } else {
    document.getElementById('amigo').focus
  }
  limparCampo()
}

//VALIDAR ENTRADA:
function validarEntrada(nome) {
  if (nome.value == null) {
    alert('Digite um nome')
  } else {
    document.getElementById('amigo').focus
  }
}
//FUNÇÃO PARA LIMPAR O CAMPO DE TEXTO DO INPUT DO FORMULÁRIO

function limparCampo() {
  campo = document.getElementById('amigo')
  campo.value = ''
}

//FUNÇÃO PARA SORTEAR OS AMIGOS INSERIDOS NA LISTA
function sortearAmigo() {
  amigoIndex = Math.floor(Math.random() * listaNomes.length)
  amigoSecreto = listaNomes[amigoIndex]
  amigo.innerText = `${amigoSecreto}`
  if (amigo) {
    index = `${amigoIndex}`
    listaAmigo[index].innerText = ' '
  } else {
    sortearAmigo()
  }
}
