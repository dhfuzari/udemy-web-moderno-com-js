var d = 40;
let e = 50;

(function escopeFunction() {    
    console.log('Escope function: ', d, e);
})();

(function varLetConst() {

var a = 10;
let b = 20;

console.log('a: ', a);
console.log('b: ', b);

var a = 11;
b = 22;

console.log('a: ', a);
console.log('b: ', b);

a = 100;
b = 200;

console.log('a: ', a);
console.log('b: ', b);

const c = 30;
//c = 55; Você não pode alterar o valor de uma constante
console.log('c: ', c);

console.log('d :', d);
console.log('e :', e);

})();

// console.log('e: ', e);
// var e = 50;

// console.log('f: ', f);
// let f = 50;


