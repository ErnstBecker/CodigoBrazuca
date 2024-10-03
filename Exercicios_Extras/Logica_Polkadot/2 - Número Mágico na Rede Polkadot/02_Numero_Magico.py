def eh_primo(numero):
	if numero < 2:
		return False
	for interacao in range(2, int(numero ** 0.5) + 1):
		if numero % interacao == 0:
			return False
	return True

def soma_digitos(numero):
	return sum(int(digito) for digito in str(numero))

def encontrar_numero_magico(intervalo_inicial, intervalo_final):
	for numero in range(intervalo_inicial, intervalo_final + 1):
		if numero % 4 == 0 and eh_primo(numero) and soma_digitos(numero) % 2 != 0:
			return numero
	return "Número Mágico não encontrado"

resultado = encontrar_numero_magico(1, 100)
print(f"O número mágico encontrado é: {resultado}")
