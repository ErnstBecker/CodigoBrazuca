const fatorial = (numero) => {
  // Fatoriais não são definidos para números negativos
  if (numero < 0) return "Número inválido";
  // O fatorial de 0 e 1 é 1
  if (numero === 0 || numero === 1) return 1;

  let resultado = 1;
  for (let i = 2; i <= numero; i++) {
    // Multiplica o resultado pelo número atual
    resultado *= i;
  }

  return resultado;
};

// ! Coloquei um limite de 20 para que não quebre o limite de precisão. :)
const numeroAleatorio = () => Math.floor(Math.random() * 20);
const numero = numeroAleatorio();
console.log(`O fatorial de ${numero} é: ${fatorial(numero)}`);
