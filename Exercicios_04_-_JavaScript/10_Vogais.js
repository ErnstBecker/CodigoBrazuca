const vogais = ["a", "e", "i", "o", "u"];

const nome = "Ernst Becker";

let contador = 0;

for (let i = 0; i < nome.length; i++) {
	if (vogais.includes(nome[i])) {
		contador++;
	}
}
console.log(`O número de vogais no nome é "${nome}" é: ${contador}`);
