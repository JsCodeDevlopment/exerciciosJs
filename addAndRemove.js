// aqui criamos uma li com classe lista que vai mandar um texto nome completo e um imput
//assim como indicamos que o input é filho da li e a li filho da ul
function add() {
    const ul = document.getElementById('campos');
    const newLi = document.createElement('li');
    newLi.className = "lista";
    newLi.innerText = "Nome completo: ";

    const newInput = document.createElement('input');
    newInput.type = "text";

    newLi.appendChild(newInput);
    ul.appendChild(newLi);
}
// aqui chamamos o pai de todo que é a ul em seguida chamamos os elementos criados na função add()
// depois uso o pai dos elementos criados que é a li e uso o evento removeChild() para excluir ele e o que tem dentro
// dentro do removeChield passamos as corrdenadas do que queremos excluir. remocao1[remocao1.length -1 vai
// remover o último elemento, caso tenha mais de 1. caso queira excluir o primeiro seria remocao1[0]
function remove() {
    const remocao0 = document.getElementById('campos');

    const remocao1 = document.getElementsByClassName('lista');
    const remocao2 = document.getElementById('input');

    remocao0.removeChild(remocao1[remocao1.length -1]);
}