let isActive = false;
console.log(isActive);

isActive = true;
console.log(isActive);

isActive = 1;
console.log(!!isActive);

console.log('Tipos verdadeiros: ');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'text');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isActive = true))

console.log('Tipos falsos: ');
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isActive = false));