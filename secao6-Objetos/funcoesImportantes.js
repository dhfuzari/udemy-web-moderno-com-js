const pessoa = {
  nome: 'Rebeca',
  idade: 2,
  peso: 13
}

// Object.keys, Object.values e Object.entries
console.log(pessoa);
console.log(Object.keys(pessoa)); // Todas as chaves de um objeto
console.log(Object.values(pessoa)); // Todos os valores de um objeto
console.log(Object.entries(pessoa)); // Todos os registros/entradas de um objeto

Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
})

// Object.defineProperty
Object.defineProperty(pessoa, 'dataNascimento', {
  enumerable: true,
  writable: false,
  value: '01/01/2019'
});

console.log(pessoa.dataNascimento);
pessoa.dataNascimento = '01/01/2017';
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

// Object.assign
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2);
console.log(obj);

// Object freeze
Object.freeze(obj)
obj.a = 12345;
console.log(obj)
