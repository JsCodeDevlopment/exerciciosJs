import { tela } from "../index.js";
import { dados } from "./resultDados.js";

export function calc() {
  const button = document.querySelector("#sendButton");

  button.addEventListener("click", () => {
    const inputPeso = document.querySelector("#peso");
    const inputAltura = document.querySelector("#altura");

    function resetInput() {
      inputPeso.value = "";
      inputAltura.value = "";
    }

    if (inputPeso.value === "" || inputAltura.value === "") {
      alert("Preencha os campos");
      resetInput();
      return;
    }

    calculoDoImc(inputPeso.value, inputAltura.value, "result");
    resetInput();
    dados()


  });
}

function calculoDoImc(peso, altura, id) {
  const resultado = peso / (altura * altura);

  

  const result = document.createElement("h1");
  result.innerText = resultado.toFixed(1);
  result.id = id;
  tela.append(result)
  return resultado;
}
