function filtrarPrecosAltos(precos: number[], numeroCorte?: number, desconto?: number): string[] {
	return precos
		.filter((preco) => preco > (numeroCorte ?? 100))
		.map((preco) => `R$${(preco * (desconto ?? 0.95)).toFixed(2)}`);
}

const corteAleatorio = Math.floor(Math.random() * 200 + 1);
const descontoAleatorio = (((Math.random() * 0.99 + 0.01))).toFixed(2);
const descontoFinal = (1 - parseFloat(descontoAleatorio)).toFixed(2);

console.log(`O número aleatório de corte da vez é: ${corteAleatorio}`);
console.log(`Desconto: ${parseFloat(descontoAleatorio) * 100}% = valor * ${descontoFinal}`);
console.log(filtrarPrecosAltos([150, 50, 23, 83,  200, 30, 111])); // ? [150,  200, 111] = R$142.50, R$190.00, R$105.45
console.log(filtrarPrecosAltos([150, 50, 23, 83,  200, 30, 111], corteAleatorio, parseFloat(descontoFinal)));
