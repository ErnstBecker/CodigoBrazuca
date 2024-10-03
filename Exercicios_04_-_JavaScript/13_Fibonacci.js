const fibonacci = (numero) => {
	if (numero <= 0) return "Número inválido";
	if (numero === 1) return [0];
	if (numero === 2) return [0, 1];
	let fibonacci = [0, 1];

	for (let i = 2; i < numero; i++) {
		fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
	}

	return fibonacci;
};

const numero = 10;
console.log(`A sequência de Fibonacci de ${numero} é: ${fibonacci(numero)}`);
