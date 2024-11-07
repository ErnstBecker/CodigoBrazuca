class Animal {
	nome: string;
	som: string;
	constructor(nome: string, som: string) {
		this.nome = nome;
		this.som = som;
	}
	emitirSom(): string {
		return `${this.nome} faz ${this.som}`;
	}
	uivarQueNemUmAnimal(): string {
		return `${this.nome}: AAAAAUUUUUUUUUUUUUUU Baby, I'm preying on you tonight, Hunt you down eat you alive...`;
	}
}
class Cachorro extends Animal {
	raca: string;
	constructor(nome: string, som: string, raca: string) {
		super(nome, som);
		this.raca = raca;
	}
}
const rex = new Cachorro("Rex", "au au", "Labrador");
console.log(rex.emitirSom());
console.log(`Raça: ${rex.raca}\n`);

const gato = new Cachorro("Gato", "AUuoHH ARguhhh", "Cachorrão");
console.log(gato.emitirSom());
console.log(`Raça: ${gato.raca}`);
console.log(gato.uivarQueNemUmAnimal());

// ! Sim, o nome do cachorro que eu fiz é gato. Eu coloquei isso pq eu quis. :)
