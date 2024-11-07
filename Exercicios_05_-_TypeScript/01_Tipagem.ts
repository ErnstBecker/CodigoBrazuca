const anoAtual = new Date().getFullYear();
const nome: string = "Ernst";
const anoNascimento: number = 2001;
const idade: number = anoAtual - anoNascimento;
const ativoNoCurso: boolean = true;
const hobbies: string[] = ["Estudo", "Jogos", "Música", "Programação"];
const endereco: {
	cidade: string;
	estado: string;
	pais: string;
	quantidadeCidades: number;
} = {
	cidade: "Rio de Janeiro",
	estado: "RJ",
	pais: "Brasil",
	quantidadeCidades: 92,
};

console.log(`Nome: ${nome}, `);
console.log(`Idade: ${idade} ${idade > 1 ? "anos" : "ano"}`);
console.log(`Ativo no Curso: ${ativoNoCurso}`);
console.log(`Hobbies: ${hobbies.join(", ")}`);
console.log(`País: ${endereco.pais}`);
console.log(
	`Endereço: ${endereco.cidade} - ${endereco.estado} : 1 dentro de uma das ${endereco.quantidadeCidades} cidades do ${endereco.cidade}`
);
