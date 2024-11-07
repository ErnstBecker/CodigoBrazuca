function formatarEntrada(valor: string | number | boolean): string | number | boolean {
	return typeof valor === "string" ? valor.toUpperCase() :
	typeof valor === "number" ? valor * 10 :
	typeof valor === "boolean" ? !valor:
	valor;
}
console.log(formatarEntrada("typescript")); // "TYPESCRIPT"
console.log(formatarEntrada(5)); // 50
console.log(formatarEntrada(false)); // true
