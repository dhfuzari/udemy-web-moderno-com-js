// Entendo o objeto this dos módulos do Node

// 1 - Observação importante: o this na raiz de um módulo aponta para exports e module.exports. Já quando é
// usado dentro de uma função, aponta para global. Ou seja, dentro de uma função se você usar o this, está
// literalmente usadno o objeto global do Node

console.log('\n--- this no escopo do módulo ---')
console.log('this === global: ', this === global);
console.log('this === module: ', this === module);
console.log('this === exports: ', this === exports);
console.log('this === module.exports: ', this === module.exports);

function logThis() {
  console.log('\n--- this no escopo de função ---')
  console.log('this === global: ', this === global);
  console.log('this === module: ', this === module);
  console.log('this === exports: ', this === exports);
  console.log('this === module.exports: ', this === module.exports);

  this._testeValorThis = 'Teste valor This!!!';
  console.log('global._testeValorThis na raiz do função: ', global._testeValorThis);

  const arrowFunctionThisInterna = () => {
    console.log('\n--- this no escopo de arrow function interna da função logThis ---')
    console.log('this === global: ', this === global);
    console.log('this === module: ', this === module);
    console.log('this === exports: ', this === exports);
    console.log('this === module.exports: ', this === module.exports);
  }
  arrowFunctionThisInterna();
}

const arrowFunctionThis = () => {
  console.log('\n--- this no escopo de arrow function ---')
  console.log('this === global: ', this === global);
  console.log('this === module: ', this === module);
  console.log('this === exports: ', this === exports);
  console.log('this === module.exports: ', this === module.exports);
}

class ClassThis {
  saudacao() {
    console.log('\n--- this no escopo de classe ---')
    console.log('this === global: ', this === global);
    console.log('this === module: ', this === module);
    console.log('this === exports: ', this === exports);
    console.log('this === module.exports: ', this === module.exports);
  }
}

const thisObjLiteral = {
  saudacao() {
    console.log('\n--- this no escopo de objeto literal ---')
    console.log('this === global: ', this === global);
    console.log('this === module: ', this === module);
    console.log('this === exports: ', this === exports);
    console.log('this === module.exports: ', this === module.exports);
  }
}

logThis();
arrowFunctionThis();

thisObjLiteral.saudacao();

const thisEscopoClasse = new ClassThis;
thisEscopoClasse.saudacao();

console.log('\nglobal._testeValorThis na raiz do módulo: ', global._testeValorThis);
