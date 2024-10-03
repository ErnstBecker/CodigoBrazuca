const numeroAleatorio = () => Math.floor(Math.random() * 10);

const primeiroNumero = numeroAleatorio();
const segundoNumero = numeroAleatorio();

const ehMultiplo = (primeiroNumero, segundoNumero) => {
	return primeiroNumero % segundoNumero === 0;
}

// A função retorna true se os números forem multiplos, e false caso contrário.
console.log(`O número ${primeiroNumero} e ${segundoNumero} ${ehMultiplo(primeiroNumero, segundoNumero) ? "são múltiplos" : "não são múltiplos"}`);
