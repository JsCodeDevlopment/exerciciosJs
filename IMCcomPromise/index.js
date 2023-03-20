import { calc } from "./Modules/calc.js";
import { titulo, inputPeso, inputAltura, buttonSend } from "./Modules/elements.js";

export const tela = document.querySelector("#root");

function render() {
  tela.append(titulo("Calculando IMC", "title"));
  tela.append(inputPeso("number", "peso"))
  tela.append(inputAltura("number", "altura"))
  tela.append(buttonSend("sendButton", "Calcular"))
}
render();
calc()