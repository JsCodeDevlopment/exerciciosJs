// inicialização Boas Vindas.
let welcome = alert("WELCOME GUY!\n" + "Here \you'll\ select u team.\n" + "\Let´s\ Go?!");
// criando o jogador.
function createPlayer(){
// entrada dos dados.
    const divDataReception = document.getElementById('dataReception');
    const inputName = document.getElementById('name');
    const inputPosition = document.getElementById('position');
    const inputNumber = document.getElementById('number');
// criação dos elementos.
    const newP = document.createElement('p');
    newP.className = inputNumber.value;
    newP.innerText = inputName.value;
    const newP1 = document.createElement('p');
    newP1.className = inputNumber.value;
    newP1.innerText = inputPosition.value;
    const newP2 = document.createElement('p');
    newP2.className = inputNumber.value;
    newP2.innerText = inputNumber.value;
// atribuição da filiação.
    divDataReception.appendChild(newP);
    divDataReception.appendChild(newP1);
    divDataReception.appendChild(newP2);
// apagando o conteúdo escrito no input.
    inputName.value = "";
    inputPosition.value = "";
    inputNumber.value = "";
};
// removendo o jogador.
function removePlayer(){
// entrada dos dados.
    const divDataReception = document.getElementById('dataReception');
    const inputNumberToRemove = document.getElementById('delet').value;
    const pTags = divDataReception.getElementsByClassName(inputNumberToRemove);
// procura pelo n° informado no input, para apagar o jogador.
// essa estrutura de repetição irá apagar cada "p" que esteja relacionado ao player informado.
for (let i = 3; i <= pTags.length; i--) { 
    divDataReception.removeChild(pTags[0]);
  }
// apagando o conteúdo escrito no input.
inputNumberToRemove.value = "";
};