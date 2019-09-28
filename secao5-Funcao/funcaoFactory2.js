//Factory que aceita parâmetros para a criação do novo objeto
function createProd(name = 'Prod', price = 1) {
  return {
    name,
    price,
  };
}
console.log(
  createProd('Asus Zenfone 5', 1.699),
  createProd('Macbook air', 9.499)
);
