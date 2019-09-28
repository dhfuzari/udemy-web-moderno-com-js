const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[10] = 10;
console.log(valores);
console.log(valores.length);

valores.push({id: 3}, false, null, 'teste'); // push aceita mais de um valor como parâmetro
console.log(valores, valores.length);

console.log('\n', valores.pop());
console.log(valores, valores.length);

console.log('\n', delete valores[0]);
console.log(valores, valores.length);

console.log('\n', delete valores[1]);
console.log(valores, valores.length);

console.log('\n', delete valores[5]);
console.log(valores, valores.length);

console.log(typeof valores);