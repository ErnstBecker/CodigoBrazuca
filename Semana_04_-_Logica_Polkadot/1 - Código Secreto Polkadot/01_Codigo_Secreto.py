def codigo_secreto(intervalo_inicial, intervalo_final):
	resultado = 0
	for numeros in range(intervalo_inicial, intervalo_final + 1):
		if numeros % 3 == 0 and numeros % 5 == 0:
			continue
		if numeros % 3 == 0:
			resultado += numeros
		if numeros % 5 == 0:
			resultado -= numeros
	return resultado

def inicio():
	print("Programa para desvendar o Código Secreto da Polkadot")
	intervalo_inicial = int(input("Digite o número inicial do intervalo: "))
	intervalo_final = int(input("Digite o número final do intervalo: "))
	print(f"O valor total calculado é: {codigo_secreto(intervalo_inicial, intervalo_final)}")

inicio()
