function calcularMontante() {
    const capitalInicial = parseFloat(prompt("Digite o capital inicial investido:"));
    const taxaDeJuros = parseFloat(prompt("Digite a taxa de juros mensal (em percentual):")) / 100;
    const tempoMeses = parseInt(prompt("Digite o tempo do investimento em meses:"));
  
    const montante = capitalInicial * Math.pow((1 + taxaDeJuros), tempoMeses);
  
    return montante.toFixed(2);
  }
  
  const resultado = calcularMontante();
  console.log(`O montante do investimento é: R$ ${resultado}`);
  