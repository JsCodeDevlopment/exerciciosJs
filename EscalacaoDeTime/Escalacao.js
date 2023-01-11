// inicialização Boas Vindas
let welcome = alert("WELCOME GUY!\n" + "Here \you'll\ select u team.\n" + "\Let´s\ Go?!");

// criando o jogador
function createPlayer(){
    const divDataReception = document.getElementById('dataReception');
    const inputName = document.getElementById('name');
    const inputPosition = document.getElementById('position');
    const inputNumber = document.getElementById('number');

    const newP = document.createElement('p');
    newP.className = 'name';
    newP.innerText = inputName.value;
    divDataReception.appendChild(newP);

    const newP1 = document.createElement('p');
    newP1.className = 'position';
    newP1.innerText = inputPosition.value;
    divDataReception.appendChild(newP1);

    const newP2 = document.createElement('p');
    newP2.className = 'number';
    newP2.innerText = inputNumber.value;
    divDataReception.appendChild(newP2);
    
};

// removendo o jogador
function removePlayer(){
    const divDataReception = document.getElementById('dataReception');
    console.log(divDataReception);
};