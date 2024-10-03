const frase = "Até agora os filósofos ficam preocupados na interpretação do mundo de várias maneiras. O que importa é transformá-lo";

let quantidadeLetras = 0;
for (let i = 0; i < frase.length; i++) {
	if (frase[i].toUpperCase() === "A" || frase[i].toUpperCase() === "Á"  || frase[i].toUpperCase() === "À") {
		quantidadeLetras++;
	}
}

console.log(`A frase contém ${quantidadeLetras} letras "A", incluindo as acentuadas.`);
