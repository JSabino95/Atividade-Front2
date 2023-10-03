let numerosPares = 0;
let numerosImpares = 0;

for (let i = 0; i < 10; i++) {
  const numero = parseInt(prompt(`Informe o ${i + 1}º número inteiro:`));
  
  if (numero % 2 === 0) {
    numerosPares++;
  } else {
    numerosImpares++;
  }
}

console.log(`Quantidade de números pares: ${numerosPares}`);
console.log(`Quantidade de números ímpares: ${numerosImpares}`);

