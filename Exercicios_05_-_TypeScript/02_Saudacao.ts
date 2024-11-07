const anoPresente: number = new Date().getFullYear();

const distros: { nome: string; lancamento: number }[] = [
	{ nome: 'Ubuntu', lancamento: 2004 },
	{ nome: 'Debian', lancamento: 1993 },
	{ nome: 'Fedora', lancamento: 2003 },
	{ nome: 'Arch Linux', lancamento: 2002 },
	{ nome: 'CentOS', lancamento: 2004 },
	{ nome: 'openSUSE', lancamento: 2005 },
	{ nome: 'Manjaro', lancamento: 2011 },
	{ nome: 'Mint', lancamento: 2006 },
	{ nome: 'Windows 10', lancamento: 2015 },
	{ nome: 'Windows 11', lancamento: 2021 },
	{ nome: 'Red Hat Enterprise Linux', lancamento: 2000 },
	{ nome: 'Kali Linux', lancamento: 2013 },
	{ nome: 'Elementary OS', lancamento: 2011 },
	{ nome: 'Zorin OS', lancamento: 2008 },
	{ nome: 'Slackware', lancamento: 1993 },
	{ nome: 'Gentoo', lancamento: 2002 },
	{ nome: 'Alpine Linux', lancamento: 2005 },
	{ nome: 'Puppy Linux', lancamento: 2003 },
	{ nome: 'MX Linux', lancamento: 2014 },
	{ nome: 'Solus', lancamento: 2015 },
	{ nome: 'Pop!_OS', lancamento: 2017 },
	{ nome: 'Raspberry Pi OS', lancamento: 2012 },
	{ nome: 'Void Linux', lancamento: 2014 },
	{ nome: 'Bodhi Linux', lancamento: 2009 }
];

function saudacao(nome: string, suaDistro?: string): string {
	let idadeDistro = anoPresente - (distros.find(d => d.nome === suaDistro)?.lancamento ?? 0);

	return suaDistro
		? suaDistro === 'Ubuntu'
			? `${nome}, você é um usuário do ${suaDistro} das massas, distro essa que possui ${idadeDistro > 1 ? `${idadeDistro} anos` : '1 ano'} de história!`
			: `${nome}, você é um usuário do ${suaDistro}, distro essa que possui ${idadeDistro > 1 ? `${idadeDistro} anos` : '1 ano'} de história!`
			: `Saudações ${nome}!`;
}

console.log(saudacao("Ernst"));
console.log(saudacao("Ernst", "Arch Linux"));
console.log(saudacao("Isac", "Manjaro"));
console.log(saudacao("Joás", "Void Linux"));
console.log(saudacao("Milla", "Windows 11"));
console.log(saudacao("Dante", "Ubuntu"));
