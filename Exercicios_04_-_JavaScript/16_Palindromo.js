let frase = "Aibofobia"
// Curiosidade: A palavra Aibofobia é o medo de palíndromos, ela é um palíndromo.

const palindromo = (frase) => {
	let palindromo = true;
	for (let i = 0; i < frase.length / 2; i++) {
		// Coloquei para as frases ficarem em minúsculas para evitar erros. Mas pode trocar por frase.toLowerCase()
		if (frase[i].toUpperCase() !== frase[frase.length - i - 1].toUpperCase()) {
			palindromo = false;
			break;
		}
	}
	return palindromo;
};

console.log(`A frase "${frase}"${palindromo(frase) ? " é um palíndromo" : " não é um palíndromo"}`);
