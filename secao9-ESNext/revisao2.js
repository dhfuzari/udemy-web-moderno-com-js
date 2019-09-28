// Recursos de funções

// Arrow function
const soma = (a, b) => a + b
console.log(soma(5, 7));

// Arrow function - this
// Arrow functions não possuem escopo proprio para this. O this esta associado ao local no qual
// a função foi escrita, no caso de um modulo node, o this apontará para exports ou module.exports
const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({}); // Não funcionará, não é permitido fazer o bind de arrow functions
lexico1();
lexico2();

// Parametro default
function log(texto = 'Node') {
  console.log(texto);
}
log()
log(null);
log('Javascript');

// Operador rest
function total(...numeros) {

  let total = 0;
  numeros.forEach(n => total += n);
  return total;
}
console.log(total(2, 3, 4, 5));
