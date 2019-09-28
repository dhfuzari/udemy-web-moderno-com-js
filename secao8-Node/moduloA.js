// Existem 3 formas que significam a mesma coisa, de exporta-mos as coisas no Node JS,
// e existe também a forma padrão que veremos no arquivo moduloB.js

// 1- Expor o valor em this
this.ola = 'Fala Pessoal';

// 2- Expor o valor em exports
exports.bemVindo = 'Bem vindo ao NodeJS!';

// 3- Expor esse valor em module.exports
module.exports.ateLogo = 'Até o próximo exemplo!';

console.log(this, exports, module.exports);
console.log(this === exports); // true
console.log(this === module.exports); // true
console.log(exports === module.exports); // true