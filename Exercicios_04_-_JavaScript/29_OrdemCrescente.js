const numerosAleatorios = ()  => Math.floor(Math.random() * 10 + 1);
const lista = Array.from({ length: 3 }, numerosAleatorios);

const ordemCrescente = (lista) => {
	for (let i = 0; i < lista.length - 1; i++) {
		if (lista[i] > lista[i + 1]) {
			return false;
		}
	}
	return true;
};

console.log(lista);
console.log(ordemCrescente(lista));
