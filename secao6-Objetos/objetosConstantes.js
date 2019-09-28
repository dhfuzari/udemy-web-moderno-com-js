// pessoa aponta para o endereço de memorias 1001 -> {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// agora, pessoa apontará para o endereço de memorias 1002 -> {...}
// pessoa = { nome: 'Ana' }; // Isso ira gerar um erro, pq pessoa é uma constante

// A função freeze congela o objeto para que nenhum atributo desse ojbeto seja alterado,
// oque não é alcançado apenas usando a palavra chave const na criação desse objeto.
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