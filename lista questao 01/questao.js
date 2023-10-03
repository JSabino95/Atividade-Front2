function calculartempo(populacaoA, taxaCrescimentoA, populacaoB, taxaCrescimentoB) {
    let anos = 0;
  
    while (populacaoA < populacaoB) {
      populacaoA *= 1 + taxaCrescimentoA / 100;
      populacaoB *= 1 + taxaCrescimentoB / 100;
      anos++;
    }
  
    return anos;
  }
  
  const populacaoA = 80000;
  const taxaCrescimentoA = 3;
  const populacaoB = 200000;
  const taxaCrescimentoB = 1.5;
  
  const anosNecessarios = calculartempo(populacaoA, taxaCrescimentoA, populacaoB, taxaCrescimentoB);
  
  console.log(`Levará aproximadamente ${anosNecessarios} anos para a população do país A igualar ou ultrapassar a população do país B.`);
  