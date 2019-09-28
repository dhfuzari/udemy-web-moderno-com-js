// For of -> Itera em cima de valores
for (let letra of 'Cod3r') {
  console.log(letra);
}
console.log('\n');

// For in - > itera em cima de índices
const assuntosEcma = ['Map', 'Set', 'Promise'];
for (let letra in assuntosEcma) {
  console.log(letra);
}
console.log('\n');

// For of para iterar em cima valores
for (let assunto of assuntosEcma) {
  console.log(assunto);
}
console.log('\n');

// For of para iterar em cima de chaves e/ou valores
const assuntosMap = new Map([
  ['Map', { abordado: true }],
  ['Set', { abordado: true }],
  ['Promise', { abordado: false }],
]);
console.log('assuntosMap: ', assuntosMap);
console.log('\n');

console.log(assuntosMap.keys());
for (let chave of assuntosMap.keys()) {
  console.log(chave);
}
console.log('\n')

console.log(assuntosMap.values());
for (let value of assuntosMap.values()) {
  console.log(value);
}
console.log('\n')

console.log(assuntosMap.entries());
// Usando destructuring para receber a chave e o valore de entries da iteração atual
for (let [ch, vl] of assuntosMap.entries()) {
  console.log(ch, vl);
}
console.log('\n');

const s = new Set(['a', 'b', 'c']);
for (let letra of s) {
  console.log(letra);
}
console.log('\n');

