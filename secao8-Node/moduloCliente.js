// Importar um módulo usando o CommomsJS.
// Obs.: Quando importamos um módulo que está dentro do nosso projeto, usamos o caminho relativo;

const moduloA = require('./moduloA'); // Não preciso colocar a extensão .js já que estamos trabalhando em um runtime js
const moduloB = require('./moduloB'); // Não preciso colocar a extensão .js já que estamos trabalhando em um runtime js

console.log(moduloA.ola);
console.log(moduloA.bemVindo);
console.log(moduloA.ateLogo);

console.log(moduloB.bomDia);
console.log(moduloB.teste);
console.log(moduloB.boaNoite());