// Estrutura Map
const tecnologias = new Map();

// Para setar um valor de uma estrutura map, usa-se o metodo set()
tecnologias.set('react', { framework: false });
tecnologias.set('angular', { framework: true });

// Para acessar um valor de uma estrutura map, usa-se o metodo get()
console.log(tecnologias.get('react'));
console.log(tecnologias.get('angular').framework);
console.log('\n');


const chavesVariadas = new Map([
  [function () { }, 'Função'],
  [{}, 'Objeto'],
  [123, 'Número']
]);

chavesVariadas.forEach((vl, index, arr) => {
  console.log(vl, index, arr);
});
console.log('\n');

// Verifica se um elementos esta ou não contido em um Map
console.log(chavesVariadas.has(123));
console.log('\n');

// Quantidade de itens de um Map
console.log('Size of chavesVariadas: ', chavesVariadas.size);
console.log('\n');

// Deleta um item de um Map
chavesVariadas.delete(123);

console.log(chavesVariadas.has(123));
console.log('\n');
console.log('Size of chavesVariadas: ', chavesVariadas.size);
console.log('\n');