function getPrice(tax = 0, currency = 'R$') {
  return `${currency} ${this.price * (1 - this.discount) * (1 + tax)}`;
}

const product = {
  name: 'Notebook',
  price: 4589,
  discount: 0.15,
  getPrice,
};

// Call function using global scope values
global.price = 20;
global.discount = 0.1;
console.log(getPrice());

// ###################

// Call function as product member object(has it's own scope - this(product))
console.log(product.getPrice());

// ###################

// Using call to invoke getPrice function and pass it smartphone object as context scope
const smartphone = {
  price: 1699,
  discount: 0.15,
};
console.log(getPrice.call(smartphone, 0.17, '$'));

// ###################

// Using apply to invoke getPrice function and pass it smartphone object as context scope
console.log(getPrice.apply(smartphone, [0.12, '$']));
