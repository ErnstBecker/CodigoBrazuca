enum DiasSemana {
	Segunda = "Segunda-feira",
	Terca = "Terça-feira",
	Quarta = "Quarta-feira",
	Quinta = "Quinta-feira",
	Sexta = "Sexta-feira",
	Sabado = "Sábado",
	Domingo = "Domingo",
}

enum Feriados {
	Independencia = "Independência",
	DiaDoTrabalhador = "Dia do Trabalhador",
	ProclamacaoRepublica = "Proclamação da República",
}

function ehFimDeSemanaOuFeriado(dia: DiasSemana | Feriados): boolean {
	return (
		dia === DiasSemana.Sabado ||
		dia === DiasSemana.Domingo ||
		dia === Feriados.Independencia ||
		dia === Feriados.DiaDoTrabalhador ||
		dia === Feriados.ProclamacaoRepublica
	); return false;
}

console.log(`${DiasSemana.Domingo}: ${ehFimDeSemanaOuFeriado(DiasSemana.Domingo)}`); // true
console.log(`${DiasSemana.Quinta}: ${ehFimDeSemanaOuFeriado(DiasSemana.Quinta)}`); // false
console.log(`${DiasSemana.Segunda}: ${ehFimDeSemanaOuFeriado(DiasSemana.Segunda)}`); // false
console.log(`${Feriados.Independencia}: ${ehFimDeSemanaOuFeriado(Feriados.Independencia)}`); // true
console.log(`${Feriados.DiaDoTrabalhador}: ${ehFimDeSemanaOuFeriado(Feriados.DiaDoTrabalhador)}`); // true
console.log(`${Feriados.ProclamacaoRepublica}: ${ehFimDeSemanaOuFeriado(Feriados.ProclamacaoRepublica)}`); // true
console.log(`${DiasSemana.Sexta}: ${ehFimDeSemanaOuFeriado(DiasSemana.Sexta)}`); // false
