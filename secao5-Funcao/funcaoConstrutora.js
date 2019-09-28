function Carro(velocidadeMaxima = 200, delta = 5) {
  // atributo privado
  let velocidadeAtual = 0;

  // método publico
  this.acelerar = function() {
    if (velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual += delta;
    } else {
      velocidadeAtual = velocidadeMaxima;
    }
  };

  // método público
  this.getVelocidadeAtual = function() {
    return velocidadeAtual;
  };
}

const uno = new Carro();
console.log(uno.velocidadeAtual);
uno.acelerar();
console.log(uno.getVelocidadeAtual());

console.log(' ------------------ ');

const ferrari = new Carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());

console.log(' ------------------ ');

console.log(typeof Carro);
console.log(typeof ferrari);
