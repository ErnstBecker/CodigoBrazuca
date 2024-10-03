const numeroAleatorio = () => Math.floor(Math.random() * 100);

const listaNumeros = Array.from({ length: 10 }, numeroAleatorio);
console.log(`A sua lista: ${listaNumeros}`);

listaNumeros.sort((a, b) => a - b);
console.log(`A sua lista organizada: ${listaNumeros}`);
