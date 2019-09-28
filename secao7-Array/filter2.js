// filter - função filter customizada

Array.prototype.filter2 = function (callback) {
  const filteredArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) filteredArray.push(this[i]);
  }
  return filteredArray;
};

const produtos = [
  { nome: 'macBook Pro', preco: 10.000, fragil: true },
  { nome: 'iPhone XS', preco: 7200, fragil: true },
  { nome: 'Mi 8 Lite', preco: 1249, fragil: false },
  { nome: 'ThinkPad Carbon', preco: 5500, fragil: false }
];

const produtosDuraveis = produto => !produto.fragil;
const produtosAcessiveis = produto => produto.preco < 2500;

console.log('\n 1- Produtos que são duráveis e não são caros: ', produtos.filter(produtosDuraveis).filter(produtosAcessiveis));
console.log('\n 2- Produtos que são duráveis e não são caros: ', produtos.filter2(produtosDuraveis).filter2(produtosAcessiveis));
