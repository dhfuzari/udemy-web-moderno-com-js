// reduce - executa uma função reduce para cada membro do array, resultando num único valor de retorno

const alunos = [
  { nome: 'João', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 9.8, bolsista: false },
  { nome: 'Ana', nota: 8.7, bolsista: false }
];

console.log(alunos);
const resultado = alunos.map(a => a.nota).reduce(function (acc, atual) {
  console.log('acc: ', acc, 'atual: ', atual);
  return acc + atual;
}, 0)
console.log(resultado);