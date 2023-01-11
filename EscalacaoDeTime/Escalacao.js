// inicialização Boas Vindas
let welcome = alert("WELCOME GUY!\n" + "Here \you'll\ select u team.\n" + "\Let´s\ Go?!");

// criando o jogador
function createPlayer(){
//entrada dos dados.
    const divDataReception = document.getElementById('dataReception');
    const inputName = document.getElementById('name');
    const inputPosition = document.getElementById('position');
    const inputNumber = document.getElementById('number');
// criação dos elementos
    const newP = document.createElement('p');
    newP.className = 'name';
    newP.innerText = inputName.value;
    
    const newP1 = document.createElement('p');
    newP1.className = 'position';
    newP1.innerText = inputPosition.value;
    
    const newP2 = document.createElement('p');
    newP2.className = 'number';
    newP2.innerText = inputNumber.value; 
// atribuição da filiação
    divDataReception.appendChild(newP);
    divDataReception.appendChild(newP1);
    divDataReception.appendChild(newP2);
// remoção do preenchimento dos inputs
    inputName.value = "";
    inputPosition.value = "";
    inputNumber.value = "";
};

// removendo o jogador
function removePlayer(){
    const divDataReception = document.getElementById('dataReception');
    const inputNumberToRemove = document.getElementById('delet');
};