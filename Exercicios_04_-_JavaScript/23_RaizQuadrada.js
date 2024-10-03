const numeroAleatorio = () => Math.floor(Math.random() * 100);

let numero = numeroAleatorio();

const raizQuadrada = (numero) => {
	let raiz = Math.sqrt(numero);
	return raiz;
};

console.log(`A raiz quadrada de ${numero} é: ${raizQuadrada(numero)}`);
