// Função para gerar números aleatórios.
const numeroAleatorio = () => Math.floor(Math.random() * 5 + 1);

// Cria uma lista com 5 números aleatórios.
const listaNumerosAleatorios = Array.from({ length: 5 }, numeroAleatorio);
console.log(`A sua lista: ${listaNumerosAleatorios}`);

// Cria um número aleatório que será comparado com os números da lista.
const numeroDesejado = numeroAleatorio();
console.log(`O seu número: ${numeroDesejado}`);

// Verifica se o número aleatório está na lista.
// Se estiver, mostra uma mensagem de sucesso. Se não estiver, mostra uma mensagem de falha.
for (let i = 0; i < listaNumerosAleatorios.length; i++) {
  if (listaNumerosAleatorios[i] === numeroDesejado) {
    console.log(`O número ${numeroDesejado} está na lista!`);
		break;
  } else if (i === listaNumerosAleatorios.length - 1) {
		console.log(`O número ${numeroDesejado} NÃO está na lista!`);
	}
}
