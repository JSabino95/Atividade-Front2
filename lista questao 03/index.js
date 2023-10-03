const n = parseInt(prompt("Quantos números você deseja inserir?"));
let menorValor = Infinity;
let maiorValor = -Infinity;
let somaValores = 0;

for (let i = 0; i < n; i++) {
  const numero = parseFloat(prompt(`Informe o ${i + 1}º número:`));
  
  if (numero < menorValor) {
    menorValor = numero;
  }
  
  if (numero > maiorValor) {
    maiorValor = numero;
  }

  somaValores += numero;
}

console.log(`Menor valor: ${menorValor}`);
console.log(`Maior valor: ${maiorValor}`);
console.log(`Soma dos valores: ${somaValores}`);
