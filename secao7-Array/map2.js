// função map customizada

Array.prototype.map2 = function (callback) {
  const mappedArray = [];
  for (let i = 0; i < this.length; i++) {
    mappedArray.push(callback(this[i], i, this));
  }
  return mappedArray;
}

// Tratando nums
const nums = [1, 2, 3, 4, 5];
let resultadoNums = nums.map((value, index, array) => { return value * 2 });
let resultadoNums2 = nums.map2((value, index, array) => { return value * 2 });
console.log('\n', nums);
console.log(resultadoNums);
console.log(resultadoNums2);

// Tratando carrinho
const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 13.90}',
  '{"nome": "Lápis de cor", "preco": 41.22}',
  '{"nome": "Caneta", "preco": 7.50}'
]
let resultadoCarrinho = carrinho.map((value, index, array) => JSON.parse(value).preco);
let resultadoCarrinho2 = carrinho.map2((value, index, array) => JSON.parse(value).preco);
console.log('\n', carrinho)
console.log(resultadoCarrinho);
console.log(resultadoCarrinho2);