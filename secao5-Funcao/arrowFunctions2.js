// Comparação do objeto this em funcões anônimas
let ComparaComThis = function(param) {
    console.log(this === param);
}
ComparaComThis(global); // true
ComparaComThis(this); // false
ComparaComThis(module.exports);  // false
console.log('\n-------------------------------\n');

// comparação do objeto this em funções como membros de objetos
const obj = {}
ComparaComThisObj = ComparaComThis.bind(obj);
ComparaComThisObj(global); // false
ComparaComThisObj(this);   // false
ComparaComThisObj(module.exports); // false
ComparaComThisObj(obj); // true
console.log('\n-------------------------------\n');

// Comparação do objeto this em funções arrow
let ComparaComThisArrow = (param) => {
    console.log(this === param);
}
ComparaComThisArrow(global); // false
ComparaComThisArrow(this); // true
ComparaComThisArrow(module.exports); // true
console.log('\n-------------------------------\n');


console.log(this === global); // false
console.log(this === module.exports); // true
console.log(global === module.exports); // false
console.log('\n-------------------------------\n');