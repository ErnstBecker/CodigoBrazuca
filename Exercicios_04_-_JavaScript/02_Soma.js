const soma = (primeiroNumero, segundoNumero) => primeiroNumero + segundoNumero;

primeiroNumero = Math.floor(Math.random() * 100);
segundoNumero = Math.floor(Math.random() * 100);

console.log(`A soma entre ${primeiroNumero} e ${segundoNumero} é ${soma(primeiroNumero, segundoNumero)}`);
