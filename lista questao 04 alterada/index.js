// Solicitar ao usuário o salário inicial
const salarioInicial = parseFloat(prompt("Digite o salário inicial do funcionário:"));


const anoInicial = 1995;
const anoDesejado = 2023;
let salario = salarioInicial;
let percentualAumento = 0.015; 


for (let ano = anoInicial + 1; ano <= anoDesejado; ano++) {
  salario += salario * percentualAumento; // Aumento salarial
  percentualAumento *= 2; // Dobrar o percentual para o próximo ano
}

console.log(`O salário em ${anoDesejado} é R$ ${salario.toFixed(2)}`);
