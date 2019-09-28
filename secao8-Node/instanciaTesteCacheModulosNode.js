// 1 - Instancia única
console.log('\n1- Importando um módulo que exporta sempre a mesma instância do objeto')
const iU_1 = require('./instanciaUnica');
const iU_2 = require('./instanciaUnica');

iU_1.inc();
iU_1.inc();
iU_1.inc();
iU_2.inc();
console.log(iU_1.valor, iU_2.valor);

// 2- Instância nova
console.log('\n2- Importando um módulo que exporta instâncias novas do objeto')
const iN_1 = require('./instanciaNova')();
const iN_2 = require('./instanciaNova')();

iN_1.inc();
iN_1.inc();
iN_1.inc();
iN_2.inc();
console.log(iN_1.valor, iN_2.valor);