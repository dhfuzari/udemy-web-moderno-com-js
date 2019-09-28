console.log(module.exports === this);
console.log(module.exports === exports);
console.log(this === exports);

this.a = 1;
exports.b = 2;
module.exports.c = 3;

console.log('\nthis: ', this);
console.log('exports: ', exports);
console.log('module.exports: ', module.exports);

exports = null;

console.log('\nthis: ', this);
console.log('exports: ', exports);
console.log('module.exports: ', module.exports);