import { tela } from "../index.js";

export function titulo(title, id) {
  const mainTitle = document.createElement("h1");
  mainTitle.id = id;
  mainTitle.innerText = title;
  return mainTitle;
}

export function inputPeso(type, id) {
  const peso = document.createElement("input");
  peso.type = type;
  peso.id = id;
  peso.placeholder = "Peso: ";
  return peso;
}

export function inputAltura(type, id) {
  const altura = document.createElement("input");
  altura.type = type;
  altura.id = id;
  altura.placeholder = "Altura: ";
  return altura;
}

export function buttonSend(id, text) {
  const button = document.createElement("button");
  button.id = id;
  button.innerText = text;
  return button;
}

export function resultadoDaMedida(value){
  const mensagem = document.createElement("p")
  mensagem.innerText = value
  tela.append(mensagem)
  return mensagem
}
