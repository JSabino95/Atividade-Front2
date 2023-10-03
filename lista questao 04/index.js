// Definir o ano inicial
const anoInicial = 1995;
const anoDesejado = 2023;
// Salário inicial em 1995
let salario = 1000;

// Calcular o salário para cada ano a partir de 1995 até o ano desejado
for (let ano = anoInicial + 1; ano <= anoDesejado; ano++) {
  const percentualAumento = 0.015 * (ano - anoInicial);
  salario += salario * percentualAumento; // Aumento salarial
}

console.log(`O salário em ${anoDesejado} é R$ ${salario.toFixed(2)}`);
