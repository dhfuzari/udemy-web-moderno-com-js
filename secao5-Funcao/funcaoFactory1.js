/*  A intenção da função factory é a de evitar código repetitivo para a criação de
instancias  de objetos. É uma função que retorna um objeto.
*/

// Sem função factory precisamos repetir o mesmo código várias vezes
const prod_1 = {
  name: 'prod 1',
  price: 15,
};
const prod_2 = {
  name: 'prod 2',
  price: 25,
};
console.log(prod_1, prod_2);

//Factory simples
function createProd() {
  return {
    name: 'prod_1',
    price: 10,
  };
}
console.log(createProd(), createProd());
