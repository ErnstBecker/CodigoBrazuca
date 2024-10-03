// Função para gerar números aleatórios.
const numeroAleatorio = () => Math.floor(Math.random() * 100);

// Coloco 5 números aleatórios na lista.
for (let i = 0; i < 5 ; i++) {
	listaNumeros.push(numeroAleatorio());
	console.log(listaNumeros)
}

// Aqui eu estou somando todos os números da lista.
let soma = 0;
for (let i = 0; i < listaNumeros.length; i++) {
	soma += listaNumeros[i];
}

// Para então calcular a média dos números da lista.
console.log(`A soma e a média dos números respectivos são: ${soma} e ${soma / listaNumeros.length}`);
