const numeroAleatorio = () => Math.floor(Math.random() * 100);

let listaNumeros = [];

for (let i = 0; i < 10; i++) {
	listaNumeros.push(numeroAleatorio());
}
console.log(`A sua lista de números aleatórios: ${listaNumeros}`);

listaPares = listaNumeros.filter((numero) => numero % 2 === 0);
console.log(`A sua lista de números pares: ${listaPares}`);

let somaPares = 0;
for (let i = 0; i < listaPares.length; i++) {
	if (listaPares[i] % 2 === 0) {
		somaPares += listaPares[i];
	}
}

console.log(`A soma dos números pares: ${somaPares}`);
