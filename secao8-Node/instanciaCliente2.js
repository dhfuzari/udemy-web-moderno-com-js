const iU_1 = require('./instanciaUnica');
const iU_2 = require('./instanciaUnica');

const iN_1 = require('./instanciaNova')();
const iN_2 = require('./instanciaNova')();

module.exports = {
  run() {
    console.log('\nInstância cliente 2: ');
    iU_1.inc();
    iU_1.inc();
    iU_1.inc();
    iU_2.inc();
    console.log('Instancia única 1: ', iU_1.valor);
    console.log('Instancia única 2: ', iU_2.valor);

    iN_1.inc();
    iN_1.inc();
    iN_1.inc();
    iN_2.inc();
    console.log('Instância nova 1: ', iN_1.valor);
    console.log('Instância nova 2: ', iN_2.valor);
  }
}
