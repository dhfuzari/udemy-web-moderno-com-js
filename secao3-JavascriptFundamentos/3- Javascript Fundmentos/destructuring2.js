// Desctruturing arrays

// forma básica de fazer o destructuring do primeiro elemento de uma array
// para uma variável "a"
const [a] = [10];
console.log(a);

// Forma básica de fazer o destructuring do primeiro, segungo e terceiro 
//elemento de um array 
const [num1, num2, num3] = [10, 20, 30, 40, 50];
console.log(num1, num2, num3);

// Desctructuring dos indíces 1, 3, 5 e 6 de um array de 4 itens. No caso desse
// exemplo o item 5 e 6 são undefined, porém temos um valor padrão definido para
// o ínidice 6. Obs.: podemos pular índices com o uso de elemtos vázios, com o
// uso de virgulas adicionais.
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6); // 10 9 undefined, 0;

// Essa instrução de desestruturação de um array, ignora o primeiro elemento do
// array, e depois faz a desestruturação do array interno que está na segunda
// posicao do array principal, ignorando também o seu primeiro elemento, ficando
// assim com o valor 6 na variável nota criada
const [, [,nota]] = [[, 5, 8], [9, 6, 4]];
console.log('nota: ', nota);

