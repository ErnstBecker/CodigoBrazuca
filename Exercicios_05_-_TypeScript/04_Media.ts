function calcularMedia(numeros: number[]): number {
	const total = numeros.reduce((acc, numero) => acc + numero, 0);
	return total / numeros.length;
}

console.log(calcularMedia([10, 20, 30, 40])); // ! Média esperada: (100 / 4) = 25
console.log(calcularMedia([45.53, 63.28, 16.6, 14.74, -7, 20, 11])); // ! Média esperada: (164.15 / 7) = 23.45
