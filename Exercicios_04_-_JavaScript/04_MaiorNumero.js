const primeiroNumero = Math.floor(Math.random() * 100);
const segundoNumero = Math.floor(Math.random() * 100);

const maiorNumero = (primeiroNumero, segundoNumero) => primeiroNumero > segundoNumero ? primeiroNumero : segundoNumero;

console.log(`O maior número entre ${primeiroNumero} e ${segundoNumero} é: ${maiorNumero(primeiroNumero, segundoNumero)}`);
