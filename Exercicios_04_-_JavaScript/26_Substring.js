const frase = "A história se repete, a primeira vez como tragédia, e a segunda como farsa.";
const substring = "história";

const verificarSubstring = (str, substring) => {
  return str.includes(substring);
};

const resultado = verificarSubstring(frase, substring);
console.log(`A frase contém a substring "${substring}": ${resultado}`);
