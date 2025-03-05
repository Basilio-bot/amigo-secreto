const amigos = [];
let sorteados = [];

function adicionarAmigo () {
    const input = document.getElementById("amigo"); // Pega o input
    const nome = input.value.trim(); //obtém o valor e remove espaços extras

    if (nome ==="") { //verifica se o nome estpa vazio
        alert("Por favor, digite um nome válido.");
        return;
}

if (amigos.includes(nome)) {
    alert("Esse nome já foi adicionado.")
    return;
}
 
amigos.push(nome); // Adiciona ao Array 
 input.value = ""; // Limpa o campo de entrada 
 atualizarLista();
}

 function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar
    
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;

        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "❌" ; //texto do botão
        botaoRemover.onclick = () => removerAmigo(amigo); // define a função para remover

        li.appendChild(botaoRemover); // Adiciona o botão ao lado dod noeme
        lista.appendChild(li); // Adiciona o item na lista 
    });
}
function removerAmigo(nome) {
    const index = amigos.indexOf(nome);
    if (index !== -1){
        amigos.splice(index, 1); //Remove do array
        atualizarLista(); //Atualiza a lista na tela 
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }
    if (sorteados.length === amigos.length) {
        alert ("Todos os amigos já foram sorteados! O sorteio será reiniciado.");
        sorteados = [];

    }


const naoSorteados = amigos.filter(nome => !sorteados.includes(nome));

if (naoSorteados.length === 0) {
    alert("Todos os nomes já foram sorteados.");
    return;
}

const indiceSorteado = Math.floor(Math.random() * naoSorteados.length);
const amigoSorteado = naoSorteados[indiceSorteado];

    sorteados.push(amigoSorteado); // Adiciona à lista de sorteados 
    exibirResultados(amigoSorteado)
}
function exibirResultados(nome){
    const resultadoUl = document.getElementById("resultado");
    resultadoUl.innerHTML = ""; // limpa o resultado anterior
    
    const li = document.createElement("li");
    li.textContent = `Seu amigo secreto é: ${nome} 🎉`;
    resultadoUl.appendChild(li);
}
