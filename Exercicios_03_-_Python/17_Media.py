soma_notas = 0
quantidade_notas = 0

while True:
	nota = float(input("Digite uma nota (ou -1 para sair): "))
	if nota == -1:
		break
	soma_notas += nota
	quantidade_notas += 1

if quantidade_notas > 0:
	media = soma_notas / quantidade_notas
	print(f"A média das notas é {media:.2f}")
else:
	print("Não há notas")
