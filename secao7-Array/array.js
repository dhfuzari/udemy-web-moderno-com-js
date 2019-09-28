console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Bia', 'Carlos', 'Ana');
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana'];
console.log(aprovados);

console.log(aprovados[0], aprovados[1], aprovados[2]);
console.log(aprovados[3]); // undefined

aprovados[3] = 'Paulo';
aprovados.push('Abia');
console.log(aprovados.length);

aprovados[9] = 'Rafael';
console.log(aprovados, aprovados.length);
console.log(aprovados[8] === undefined)

console.log('----- Funções básicas de array -----');
aprovados.push(true, null, 50, 20, 0);
console.log(aprovados);

console.log('\n array.sort:');
aprovados.sort();
console.log(aprovados);

console.log('\n delete array indice:');
delete aprovados[1];
console.log(aprovados);

console.log('\n array.splice - delete one item:');
aprovados.splice(2, 1); // Exclui o indice com valor 50
console.log(aprovados);

// Splice - array.splice("Indice inicial", "Items que serão excluidos", "Item que serão adicionados")
console.log('\n array.splice - delete items:');
aprovados.splice(3, 3); // Exclui 3 itens começando a partir da posição 3 do array
console.log(aprovados);

console.log('\n array.splice - delete and add items:');
aprovados.splice(2, 2, 'Elemento 1', 'Elemento 2'); // Exclui 2 itens começando a partir da posição 2 do array, e adiciona dois novos itens
console.log(aprovados);

console.log('\n array.splice - add items:');
aprovados.splice(4, 0, 'Elemento 3', 'Elemento 4'); // Apenas adiciona dois novos elementos á partir da posição 4 do array
console.log(aprovados);
