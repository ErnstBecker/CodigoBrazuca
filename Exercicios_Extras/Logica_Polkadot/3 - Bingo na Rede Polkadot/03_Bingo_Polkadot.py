import random


def cartela_bingo():
	return random.sample(range(1, 76), 5)

def sortear_numero(cartela):
	sorteados = []
	tentativas = 0
	minha_cartela = cartela.copy()
	while cartela:
		tentativas += 1
		numero = random.randint(1, 75)
		if numero in cartela:
			cartela.remove(numero)
		sorteados.append(numero)
	return minha_cartela, sorteados, tentativas

cartela = cartela_bingo()
minha_cartela, resultado, tentativas = sortear_numero(cartela)
print(f"Sua cartela é: {minha_cartela}")
print(f"Números sorteados: {resultado}")
print(f"Total de tentativas necessárias: {tentativas}")
