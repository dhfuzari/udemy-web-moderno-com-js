console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

String.prototype.reverse = function () {
  return this.split('').reverse().join('');
}

console.log('Escola Cod3r'.reverse());
console.log('Daniel Henrique Fuzari'.reverse());

Array.prototype.first = function () {
  return this[0]
}

console.log([45, 34, 12].first());
console.log([true, 1, 'Javascript'].first());

String.prototype.toString = function () {
  return 'Lascou tudo';
}

console.log('Escola Cod3r'.reverse());