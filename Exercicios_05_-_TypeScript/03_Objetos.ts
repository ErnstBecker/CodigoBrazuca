interface Produto {
	nome: string;
	preco: number;
	disponivel: boolean;
	categoria?: string;
}

const produtos: Produto[] = [
  { nome: "Teclado", preco: 356, disponivel: true, categoria: "Periféricos" },
  { nome: "Mouse", preco: 210, disponivel: false, categoria: "Periféricos" },
	{ nome: "Headset", preco: 250, disponivel: true, categoria: "Periféricos" },
	{ nome: "Microfone", preco: 170, disponivel: true, categoria: "Periféricos" },
  { nome: "Monitor", preco: 1300, disponivel: false, categoria: "Eletrônicos" },
	{ nome: "Banana", preco: 6969, disponivel: true},
	{ nome: "Smartphone", preco: 7999, disponivel: true, categoria: "Eletrônicos" },
	{ nome: "Notebook", preco: 8700, disponivel: true, categoria: "Eletrônicos" },
	{ nome: "Computador", preco: 28700, disponivel: false, categoria: "Eletrônicos" },
	{ nome: "Peruca", preco: 1000, disponivel: true },
];

// function filtrarDisponiveisPorCategoria(produtos: Produto[], categoria?: string): Produto[] {
//   return produtos.filter((produto) =>
//     produto.disponivel && (!categoria || produto.categoria === categoria)
//   );
// }

// console.log(filtrarDisponiveisPorCategoria(produtos, "Periféricos"));
// console.log(filtrarDisponiveisPorCategoria(produtos, "Eletrônicos"));
// console.log(filtrarDisponiveisPorCategoria(produtos));

function filtrarDisponiveisPorCategoria(produtos: Produto[]): Record<string, Produto[]> {
  const produtosPorCategoria: Record<string, Produto[]> = {};

  produtos
    .filter(produto => produto.disponivel)
    .forEach(produto => {
      const categoria = produto.categoria || "Sem categoria";

      if (!produtosPorCategoria[categoria]) {
        produtosPorCategoria[categoria] = [];
      }

      produtosPorCategoria[categoria].push(produto);
    });

  return produtosPorCategoria;
}

console.log(filtrarDisponiveisPorCategoria(produtos));
