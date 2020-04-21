// novo recurso do ES2015 - Destructuring de array com operador []

const [a] = [10];
console.log(a);

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6);

const [, [, nota]] = [
  [7, 8],
  [4, 10],
];
console.log(nota);
