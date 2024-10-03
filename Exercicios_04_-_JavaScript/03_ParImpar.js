const numeroAleatorio = () => Math.floor(Math.random() * 100);
const numero = numeroAleatorio();

const par = (numero) => numero % 2 == 0;

if (par(numero) === true) {
	console.log(`O número ${numero} é par!`);
} else {
	console.log(`O número ${numero} é ímpar!`);
}
