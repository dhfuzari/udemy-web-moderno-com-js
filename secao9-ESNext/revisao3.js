// Recursos de objetos

// ES*: Object.values/Object.entries
const obj1 = { a: 1, b: 2, c: 3 };

// Object.values retorna um array com os valores das propriedades de um dado objeto
console.log(Object.values(obj1));

// Object.keys etorna um array de propriedades enumeraveis de um determinado objeto
console.log(Object.keys(obj1));

// Object.entries retorna um array dos proprios pares [key, value] enumeráveis de um dado objeto
console.log(Object.entries(obj1));

//Melhorias na notação literal
const nome = 'Carla';
const pessoa = {
  nome,
  ola() {
    return `Ola ${this.nome}`
  }
}
console.log(pessoa.nome, pessoa.ola())

// Classes
class Animal {
  constructor(nome) {
    this.nome = nome;
  }
  andar() {
    console.log(`${this.nome} andou 1 passo`);
  }
}
class Cachorro extends Animal {
  falar() {
    return `Au au disse ${this.nome}!`
  }
}
const dog = new Cachorro('Brutos')
console.log(dog.falar());
dog.andar();



