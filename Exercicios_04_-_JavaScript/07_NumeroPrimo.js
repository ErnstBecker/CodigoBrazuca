const numeroAleatorio = () => Math.floor(Math.random() * 100);
const numero = numeroAleatorio();

const ehPrimo = (numero) => {
	for (let i = 2; i < numero; i++) {
		if (numero % i === 0) {
			return false;
		}
	}
	return true;
};

//? Os números primos são números naturais que são divisíveis apenas por si mesmo e por 1. Ex:
//! 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97.
console.log(`O número ${numero} ${ehPrimo(numero) ? "é primo" : "não é primo"}`);
