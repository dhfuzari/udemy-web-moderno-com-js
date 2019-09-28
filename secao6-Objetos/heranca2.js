// Cadeia de protótipos (prototype chain)

// Existem duas formas de se implementar herança em objetos javascript:
// 1- atribuindo um objeto pai á propriedade __proto__ desse objeto
// 2- usando o método setPrototypeOf da função Object

// 1- __proto__
Object.prototype.attr0 = '0'
const avo = { attr1: 'A' };
const pai = { __proto__: avo, attr2: 'B', attr3: '3' };
const filho = { __proto__: pai, attr3: 'C' };

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);

// 2- Object.setPrototypeOf
const carro = {
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMax
    }
  },
  status() {
    return `${this.velAtual}km/h de ${this.velMax}km/h`
  }
}

const ferrari = {
  modelo: 'F40',
  velMax: 324 // shadowing
}

const volvo = {
  modelo: 'V40',
  status() {
    return `${this.modelo}: ${super.status()}`
  } // shadowing
}

Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

console.log(' ---------- ');

console.log('volvo: ', volvo)
console.log(volvo, volvo.velAtual, volvo.velMax);

console.log(' ---------- ');

console.log('ferrari: ', ferrari)
console.log(ferrari, ferrari.velAtual, ferrari.velMax);

console.log(' ---------- ');

volvo.acelerarMais(100);
console.log(volvo.status());

console.log(' ---------- ');

ferrari.acelerarMais(300);
console.log(ferrari.status())

console.log(' ---------- ');