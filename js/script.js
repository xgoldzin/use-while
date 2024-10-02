const maxCapacity = 100;
let currentCount = 0;

const currentCountElement = document.getElementById('currentCount');
const peopleInput = document.getElementById('peopleInput');
const addButton = document.getElementById('addButton');

addButton.addEventListener('click', () => {
    let peopleToAdd = parseInt(peopleInput.value);
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
    let productValue = parseFloat(productInput.value);
    
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
