// Recursos gerais

// let e const
// var possui escopo de função ou global
// let possui escopo de bloco

{
  var a = 2;
  let b = 3;
}

console.log(`a: ${a}`);
// console.log(`b: ${b}`); // causara um erro por não encontrar a variável b no escopo

// Template string
const produto = 'iPad';
console.log(`${produto} é caro!
Por isso ainda não comprei`);

// Desctructuring - Desestruturar um objeto ou array
// Destructuring de objetos
const obj1 = { prop1: 10, prop2: 20, prop3: 30 };
const { prop1, prop3 } = obj1;
const { prop2: secondProp } = obj1 // Podemos durante o destructuring de um objeto, renomear suas variaveis com o uso do operador dois pontos(:)
console.log(prop1, secondProp, prop3);

// Destructuring de arrays
const arr1 = [10, 20, 30]
const [pos1, pos2] = arr1;
const [, , pos3] = arr1; // aqui, podemos omitir elementos dos indices do array colocando espaço vazio e uma virgula no lugar da variavel que seria criada
console.log(pos1, pos2, pos3);

// Por fim, também podemos desestruturar uma string literal do javascript, colocando
// cada parte(caracter) dessa string em uma variável, e o restante usamos o operador
// destructuring para coletar oque faltou
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras);