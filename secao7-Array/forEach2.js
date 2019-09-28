// Implementaçao manual de um forEach

Array.prototype.forEach2 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

console.log('\n forEach: ');
aprovados.forEach((el, index, array) => { console.log(el, index, array) });

console.log('\n forEach2: ');
aprovados.forEach2((el, index, array) => { console.log(el, index, array) });