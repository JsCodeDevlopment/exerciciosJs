import { calculoDoImc } from "./elements.js";
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
