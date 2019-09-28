/*
    Um objeto, uma função e uma classe antes de serem instanciados, são uma 
    função.
*/

console.log(typeof Object);
console.log(typeof new Object());
console.log('=============================== \n');

const func = function() {};
console.log(typeof func);
console.log(typeof new func());
console.log('=============================== \n');

class Product {}
console.log(typeof Product);
console.log(typeof new Product());
console.log('=============================== \n');
