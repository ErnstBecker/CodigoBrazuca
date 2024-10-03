const numeroAleatorio = () => Math.floor(Math.random() * 100);
const numero = numeroAleatorio();

const encontrarDivisores = (numero) => {
  const divisores = [];

  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
      divisores.push(i);
    }
  }

  return divisores;
};

console.log(`Os divisores de ${numero} são: ${encontrarDivisores(numero).join(', ')}`);
