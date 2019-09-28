// O método Object.preventExtensions impede que novas propriedades sejam adicionadas
// a um objeto, isto é, impede futuras extensões ao objeto.
const produto = Object.preventExtensions({
  nome: 'Qualquer',
  preco: 1.99,
  tag: 'promoção'
});

console.log("Prduto: ", produto)
console.log('Extensível: ', Object.isExtensible(produto))

produto.nome = 'Borracha';
produto.descricao = 'Borracha escolar branca';
delete produto.tag

console.log("\nPrduto: ", produto)

// O método Object.seal sela um objeto, evitando que novas propriedades sejas adicionadas
// a ele, e marcando todas as propriedades existentes como não configuráveis
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa);
console.log('Selado: ', Object.isSealed(pessoa));
console.log(pessoa)

pessoa.sobrenome = 'Silva';
delete pessoa.nome;
pessoa.idade = 30;

console.log(pessoa)

// O método Object.freeze congela um objeto, isto é, impede que novas propriedades sejam
// adicionadas a ele; impede que as propriedades existentes sejam removidas; e impede que
// propriedades existentes, ou sua inumerabilidade, configurabilidade, ou capacidade de
// escrita sejam alteradas. Em essência o objeto é efetivamente imutável. O método retorna
// o objeto congelado.
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

Object.freeze(pessoa);

pessoa.nome = 'Maria'
console.log(pessoa)
pessoa.end = 'Rua Abc'
console.log(pessoa)
delete pessoa.nome
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'João' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)