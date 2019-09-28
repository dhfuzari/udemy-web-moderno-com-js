// Função em JS é firt class object (firt class citizens)

// Criar uma função de forma literal
function func1() {}

// Armazenar uma função em uma variável
const func2 = function() {
  console.log('T-E-S-T-E');
};
func2();

// Armazenar uma função em um array
const collection = [
  function(opr1, opr2) {
    return opr1 + opr2;
  },
  func1,
  func2,
];
collection[2]();

// Armazenar em um atributo de objeto
const obj = {};
obj.falar = function() {
  return 'Opa';
};
console.log(obj.falar());

// Passar função como parametros
function run(fun) {
  fun();
}
run(() => {
  console.log('Run run');
});
run(func2);

//Uma função pode retornar/conter uma função
function soma(opr1, opr2) {
  return function(opr3) {
    console.log(opr1 + opr2 + opr3);
  };
}
soma(1, 2)(3);
const cincoMais = soma(2, 3);
cincoMais(5);
