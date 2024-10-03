const numeroAleatorio = () => Math.floor(Math.random() * 1000);

const somaDigitos = (numero) => {
	let soma = "";
	for (let i = 0; i < numero.toString().length; i++) {
		soma += numero.toString()[i];
	}
	return soma;
};

const numero = numeroAleatorio();
console.log(`A soma dos dígitos de ${numero} é: ${somaDigitos(numero)}`);
