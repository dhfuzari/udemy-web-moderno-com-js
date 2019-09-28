// Exemplo de caso de uso útil do recurso de destructuring em parâmetros de
// função. Nesse caso, além de usar o destructuring de objetos na definição 
// de parâmetros de uma função, também está sendo usado o recurso de parâmetro
// padrão que assim como o destructuring também foi introduzido em 2015 no ECMA
// Script versão 6

function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

const obj = { max: 50, min: 40 };

console.log(rand(obj));        // Passando valores min e max
console.log(rand({min: 955})); // Passando apenas valo min
console.log(rand({max: 5}));   // Passando apenas valor max
console.log(rand({}));         // Passando apenas um objeto vazio