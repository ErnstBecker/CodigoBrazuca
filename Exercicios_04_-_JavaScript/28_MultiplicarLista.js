const numerosAleatorios = ()  => Math.floor(Math.random() * 10);
const numeros = Array.from({ length: 5 }, numerosAleatorios);

const multiplicarElementos = (lista) => {
  let resultado = 1;

  for (let i = 0; i < lista.length; i++) {
    resultado *= lista[i];
  }

  return resultado;
};

const resultado = multiplicarElementos(numeros);
console.log(numeros)
console.log(`O produto dos elementos da lista é: ${resultado}`);
