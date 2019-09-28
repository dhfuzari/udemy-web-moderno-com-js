// reduce - função reduce customizada
Array.prototype.reduce2 = function (callback, initial) {
  let acc = initial;
  for (let i = 0; i < this.length; i++) {
    acc = callback(acc, this[i], i, this)
  }
  return acc;
}


const alunos = [
  { nome: 'João', nota: 7.3, bolsista: true },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 9.8, bolsista: true },
  { nome: 'Ana', nota: 8.7, bolsista: false }
];

// Desafio 1: Todos os alunos são bolsistas?
const todosSaoBolsistas = alunos.reduce2((acc, current, index, array) => {
  if (acc && current.bolsista) return true;
  else return false;
}, true)
console.log('Todos alunos são bolsistas: ', todosSaoBolsistas);

// Desafio 1: Algum aluno é bolsista?
const existeBolsista = alunos.reduce2((acc, current, index, array) => {
  if (current.bolsista) return current.bolsista
  else return acc;
}, false)
console.log('Algum dos alunos é bolsista: ', existeBolsista)
