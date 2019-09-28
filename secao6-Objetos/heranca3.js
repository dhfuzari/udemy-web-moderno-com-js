const pai = { nome: 'Pedro', corCabelo: 'preto' };

// Cria um objeto filha tendo o objeto pai como protótipo(ao invéz de ter Object.prototype como protótipo)
const filha1 = Object.create(pai);
filha1.nome = 'Ana';
console.log(filha1.nome, filha1.corCabelo);

const filha2 = Object.create(pai, {
  nome: { value: 'Bia', writable: false, enumerable: true },
  idade: { value: 10, writable: false, enumerable: true }
});
console.log(filha2.nome);
filha2.nome = 'Carla';
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

console.log('\n Filha 1 \n');
console.log('Object.keys filha1: ', Object.keys(filha1));
for (let key in filha1) {
  filha1.hasOwnProperty(key) ? console.log(key) : console.log(`Por herença: ${key}`);
}

console.log('\n Filha 2 \n');
console.log('Object.keys filha2: ', Object.keys(filha2));
for (let key in filha2) {
  filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`);

}