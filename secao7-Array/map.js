// map - invoca a função callback passada por argumento para cada elemento do array e devolve
// um novo array como resultado

const nums = [1, 2, 3, 4, 5];

let resultado = nums.map((value, index, array) => {
  return value * 2;
});

console.log(nums);
console.log(resultado);

const soma = e => e + 10;
const triplo = e => e * 3;
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma).map(triplo).map(paraDinheiro);
console.log(resultado);