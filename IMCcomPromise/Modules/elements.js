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

export function calculoDoImc(peso, altura, id) {
  const resultado = peso / (altura * altura);

  if (!document.querySelector("#result")) {
    const result = document.createElement("h1");
    result.innerText = resultado.toFixed(1);
    result.id = id;
    result.innerText = resultado.toFixed(1);
    tela.append(result);
    console.log("caiu no if");
    return result;
  } else {
    const toRemove = document.querySelector("#result");
    tela.removeChild(toRemove);
    console.log("caiu no else");
  }

  return resultado;
}

export function resultadoDaMedida(value) {
  if (!document.querySelector("p")) {
    const mensagem = document.createElement("p");
    mensagem.innerText = value;
    tela.append(mensagem);
    return mensagem;
  } else {
    const toRemoveToo = document.querySelector("p");
    tela.removeChild(toRemoveToo);
  }
}
