const frase = "Até agora os filósofos ficam preocupados na interpretação do mundo de várias maneiras. O que importa é transformá-lo";

const substituirVogais = (texto) => {
  return texto.replace(/[aeiouáéíóúãâêîôûàèìòù]/gi, '*'); // Substitui todas as vogais por *
};

const novaFrase = substituirVogais(frase);
console.log(novaFrase);
