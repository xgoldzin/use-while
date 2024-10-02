const maxCapacity = 100;
let currentCount = 0;

const currentCountElement = document.getElementById('currentCount');
const peopleInput = document.getElementById('peopleInput');
const addButton = document.getElementById('addButton');

addButton.addEventListener('click', () => {
    let peopleToAdd = Number(peopleInput.value);
    let peopleAdded = 0; // Contador de pessoas que foram realmente adicionadas

    while (peopleToAdd > 0 && currentCount < maxCapacity) {
        currentCount++;
        peopleAdded++;
        peopleToAdd--;
    }

    currentCountElement.textContent = currentCount;

    // Verifica se atingiu a capacidade máxima
    if (currentCount >= maxCapacity) {
        let sobrou = peopleToAdd; // Pessoas que não conseguiram entrar
        document.getElementById("alerta").innerHTML = "<p>Capacidade máxima atingida</p>";
        document.getElementById("alerta2").innerHTML = `<p>Sobraram ${sobrou} pessoas de fora</p>`;
        peopleInput.disabled = true;
        addButton.disabled = true;
    }
});

let totalAmount = 0;

const productInput = document.getElementById('productInput');
const insertButton = document.getElementById('insertButton');
const completeButton = document.getElementById('completeButton');
const totalAmountElement = document.getElementById('totalAmount');

insertButton.addEventListener('click', () => {
    let productValue =Number(productInput.value);
    
    if (!isNaN(productValue) && productValue > 0) {
        totalAmount += productValue;
        totalAmountElement.textContent = totalAmount.toFixed(2); // Atualiza o total com 2 casas decimais
        productInput.value = 0; // Limpa o input
    }
});

completeButton.addEventListener('click', () => {
    // Exibe o valor total final e desabilita o botão "Inserir"
    insertButton.disabled = true;
    productInput.disabled = true; // Opcional: desabilita o input também
});

function calcProgGeom() {
    let inicio = Number(document.getElementById("inicio").value);
    let passo = Number(document.getElementById("passo").value);
    let repeticoes = Number(document.getElementById("repeticoes").value);

    let result = inicio; // O primeiro termo é o valor inicial
    document.getElementById("progGeom").innerHTML = ""; // Limpa resultados anteriores

   let i = 0; // Inicializa o contador
    while (i < repeticoes) {
        document.getElementById("progGeom").innerHTML += `<p>${result}</p>`;
        result *= passo; // Calcula o próximo termo da PG
        i++; // Incrementa o contador
    }
}

function calcularPA() {
    let primeiroTermo = Number(document.getElementById("inputPrimeiroTermo").value);
    let razao = Number(document.getElementById("inputRazao").value);
    let quantidadeTermos = Number(document.getElementById("inputTermos").value);

    // Verifica se os valores de entrada são válidos
    if (isNaN(primeiroTermo) || isNaN(razao) || isNaN(quantidadeTermos) || quantidadeTermos < 1) {
        document.getElementById("divResultadoPA").innerHTML = "<p>Por favor, insira valores válidos.</p>";
        return;
    }

    let resultadoPA = ""; // Inicializa a string para os termos da PA

    for (let i = 0; i < quantidadeTermos; i++) {
        let termoAtual = primeiroTermo + i * razao; // Calcula o termo atual
        resultadoPA += `<p>${termoAtual}</p>`; // Adiciona o termo à string
    }

    document.getElementById("divResultadoPA").innerHTML = resultadoPA; // Exibe os termos da PA
}

function calcProgGeom() {
    let valorInicial = Number(document.getElementById("inicio").value);
    let multiplicador = Number(document.getElementById("passo").value);
    let numRepeticoes = Number(document.getElementById("repeticoes").value);

    let resultado = valorInicial; // O primeiro termo é o valor inicial
    document.getElementById("progGeom").innerHTML = ""; // Limpa resultados anteriores

    let contador = 0; // Inicializa o contador
    do {
        document.getElementById("progGeom").innerHTML += `<p>${resultado}</p>`;
        resultado *= multiplicador; // Calcula o próximo termo da PG
        contador++; // Incrementa o contador
    } while (contador < numRepeticoes);
}

function calcularPG() {
    let valorInicial = parseFloat(document.getElementById('valorInicial').value);
    let fator = parseFloat(document.getElementById('fator').value);
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let resultado = '';
    let i = 0;

    do {
        resultado += valorInicial + '<br>';
        valorInicial *= fator;
        i++;
    } while (i < quantidade);

    document.getElementById('resultadoPG').innerHTML = resultado;
}

function calcularPA2() {
    let valorInicial = parseFloat(document.getElementById('inputValorInicial').value);
    let diferenca = parseFloat(document.getElementById('inputDiferenca').value);
    let quantidade = parseInt(document.getElementById('inputQuantidade').value);
    let resultado = '';
    let contador = 0;

    do {
        resultado += valorInicial + '<br>';
        valorInicial += diferenca;
        contador++;
    } while (contador < quantidade);

    document.getElementById('divResultadoPA2').innerHTML = resultado;
}