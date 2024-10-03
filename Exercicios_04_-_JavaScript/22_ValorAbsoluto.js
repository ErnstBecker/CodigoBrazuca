const numeroAleatorio = () => Math.floor(Math.random() * 100 + -100);

let numero = numeroAleatorio();

const valorAbsoluto = (numero) => {
	return Math.abs(numero);
};

console.log(`O valor absoluto de ${numero} é: ${valorAbsoluto(numero)}`);
