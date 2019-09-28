const pilots = ['Vettel', 'Alonso', 'Raikonen', 'Massa'];
console.log(pilots);
console.log('\n');

// Pop - remove o último elemento do array
pilots.pop();
console.log(pilots);

// Push - adiciona um elemento ao final do array
pilots.push('Verstappen');
console.log(pilots);

// Shift - remove o primeiro elemto de um array
pilots.shift()
console.log(pilots);

// Unshift - adiciona um elemento na primeira posição de um array
pilots.unshift('Hamilton');
console.log(pilots);

// Splice para adicionar elementos em um array
pilots.splice(2, 0, 'Bottas', 'Massa');
console.log(pilots);

// Splice para remover itens de um array
pilots.splice(3, 1); // Remove um item á partir da terceira posição de um array
console.log(pilots);

// Slice - Retonna uma cópia de parte de um array á partir de um sub-array criado entre as posições
// especificadas.
const somePilots = pilots.slice(1, 3);
console.log(somePilots);
