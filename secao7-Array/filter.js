// filter - cria um novo array com todos os elementos que passaram no teste implementado pela função
// fornecida

const produtos = [
  { nome: 'macBook Pro', preco: 10.000, fragil: true },
  { nome: 'iPhone XS', preco: 7200, fragil: true },
  { nome: 'Mi 8 Lite', preco: 1249, fragil: false },
  { nome: 'ThinkPad Carbon', preco: 5500, fragil: false }
];

const produtosDuraveis = produto => !produto.fragil;
const produtosAcessiveis = produto => produto.preco < 2500;

console.log('Produtos que são duráveis e não são caros: ', produtos.filter(produtosDuraveis).filter(produtosAcessiveis));
