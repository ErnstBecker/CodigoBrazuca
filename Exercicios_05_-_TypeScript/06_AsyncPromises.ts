function buscarDados(tempo?: number): Promise<string> {
	return new Promise((resolve) => {
		setTimeout(() => resolve(`Dados carregados em ${tempo ?? 5000}ms`), tempo ?? 5000);
	});
}

async function exibirDados(tempo?: number) {
	const dados = await buscarDados(tempo);
	console.log(dados);
}

// ! Coloquei um número aleatório aqui para testar a função exibirDados
// ! O tempo está entre 100 milisegundos e 10 segundos
const numeroAleatorio = Math.floor(Math.random() * 10000 + 100);

// ! Este demora por padrão 5 segundos para rodar
exibirDados();
// ? Se este de baixo tiver sorte, ele irá rodar antes do primeiro
exibirDados(numeroAleatorio);
