import { calculoDoImc, estadoImc } from "./Modules/calc.js";
import { createResultElement } from "./Modules/elements.js";

const resultsContainer = document.querySelector("#results");

const button = document.querySelector("#sendButton");
const inputPeso = document.querySelector("#peso");
const inputAltura = document.querySelector("#altura");
const title = document.querySelector("#title");

function resetInput() {
  inputPeso.value = "";
  inputAltura.value = "";
}

button.addEventListener("click", () => {
  title.innerText = "Calculando...";
  resultsContainer.innerHTML = "";

  if (inputPeso.value === "" || inputAltura.value === "") {
    alert("Preencha os campos");
    resetInput();
    return;
  }

  calculoDoImc(inputPeso.valueAsNumber, inputAltura.valueAsNumber)
    .then((imc) => {
      const imcResultElement = createResultElement("span", imc.toFixed(1));
      const stateImcResultElement = createResultElement(
        undefined,
        estadoImc(imc)
      );
      resultsContainer.append(imcResultElement, stateImcResultElement);
    })
    .catch(console.error)
    .finally(() => {
      title.innerText = "IMC Calculado!";
    });

  resetInput();
});
