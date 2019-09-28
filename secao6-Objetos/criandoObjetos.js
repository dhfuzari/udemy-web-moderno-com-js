// Formas de se criar um objeto

// 1- Usando a notação literal
const obj1 = {};
console.log(obj1);

// 2- Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object;
console.log(obj2);

// 3- Funções construtoras
function Produto(nome, preco, desc) {
  this.nome = nome
  // this.preco = preco
  // this.desc = desc

  this.getPrecoComDesconto = () => {
    return preco * (1 - desc);
  }
}
const p1 = new Produto('Caneta', 7.99, 0.15);
const p2 = new Produto('Notebook', 2998.99, 0.25);
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

// 4- Função factory
function criarFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas)
    }
  }
}
const f1 = criarFuncionario('João', 7980, 10);
const f2 = criarFuncionario('Maria', 11400, 10);
console.log(f1.getSalario(), f2.getSalario());
console.log(f1)
console.log(f2)

// 5 - Object create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// 6 - parse JSON
const fromJSON = JSON.parse('{"info": "Sou um objet"}');
console.log(fromJSON.info);