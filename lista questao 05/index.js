function calcularAreaEPerimetroDoCirculo(raio) {
    const pi = Math.PI;
    const area = pi * raio * raio;
    const perimetro = 2 * pi * raio;
    
    return {
      area: area,
      perimetro: perimetro
    };
  }
  
  // Exemplo de uso da função
  const raio = 5; // Substitua pelo raio desejado
  const resultado = calcularAreaEPerimetroDoCirculo(raio);
  
  console.log(`Área do círculo: ${resultado.area}`);
  console.log(`Perímetro do círculo: ${resultado.perimetro}`);
  