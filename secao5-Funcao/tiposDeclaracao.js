/*
  Obs.: Quando você declara uma função com function delaration, o interpretador javascript
  primeiro carrega todas as funções declaradas dessa forma, e torna todas elas disponíveis
  desde a primeira linha do código, pois ela não é uma instrução javascript como as outras
  e sim um declaração de função. Portanto, podemos invocar essa função logo na primeira
  linha do nosso código, mesmo antes da declaração da mesma. Isso já não é verdade para os
  casos de function expressions e function declarations, que por serem expressões serão
  executadas(interpretadas) na ordem em que o código foi escrito, e por isso a invocação
  dessas funções declaradas dessa forma, devem ser feitas apenas após a declaração da
  mesma
*/

console.log(soma(2, 8)); // Funciona !!
console.log(sub(10, 5)); // NÃO FUNCTIONA !!
console.log(mult(4, 4)); // NÃO FUNCTIONA !!

// function declaration
function soma(x, y) {
  return x + y;
}

// function expression
const sub = function(x, y) {
  return x - y;
};

// Funciona !! Função foi invocada após a declaração de uma function expression
console.log(sub(12, 6));

// named function expression
const mult = function mult(x, y) {
  return x * y;
};

// Funciona !! Função foi invocada após a declaração de uma named function expression
console.log(mult(5, 8));
