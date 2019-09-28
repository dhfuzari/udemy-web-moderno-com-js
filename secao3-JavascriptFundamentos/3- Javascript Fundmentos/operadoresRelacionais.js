// São operadores binários

// == Compara apenas o valor
console.log('1)', '1' == 1);  

// === Compara tipo e valor
console.log('2)', '1' === 1); 

// !== Compara apenas o tipo
console.log('3)', '3' != 3);  

// !== Compara tipo e valor
console.log('4)', '3' !== 3);

console.log('5)', 3 > 2);
console.log('6)', 3 < 2);
console.log('7)', 3 >= 2);
console.log('8)', 3 <= 2);

const d1 = new Date();
const d2 = new Date();
console.log('9)', d1 == d2);
console.log('10)', d1 === d2);
console.log('11)', d1.getTime(), d2.getTime(), d1.getTime() === d2.getTime());
console.log('12)', typeof undefined, typeof null, undefined == null);
console.log('13)', undefined === null);
