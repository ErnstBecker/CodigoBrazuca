const numerosAleatorios = ()  => Math.floor(Math.random() * 100);
const numeros = Array.from({ length: 8 }, numerosAleatorios);

const quantidadePares = (lista) => {
  let quantidade = 0;

  for (let i = 0; i < lista.length; i++) {
    if (lista[i] % 2 === 0) {
      quantidade++;
    }
  }

  return quantidade;
};

console.log(`A lista ${numeros} contém ${quantidadePares(numeros)} números pares.`);
