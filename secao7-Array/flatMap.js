// Implementação de flatMap customizado

Array.prototype.flatMap = function (callback) {
  return Array.prototype.concat.apply([], this.map(callback));
}

const escola = [
  {
    nome: 'Turma M1',
    alunos: [
      {
        nome: 'Gustavo',
        nota: 8.1
      }, {
        nome: 'Ana',
        nota: 9.3
      }
    ]
  }, {
    nome: 'Turma M2',
    alunos: [
      {
        nome: 'Rebeca',
        nota: 8.9
      }, {
        nome: 'Roberto',
        nota: 7.3
      }
    ]
  }
];

const getNotaDoAluno = aluno => aluno.nota;
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno);

const notas = escola.map(getNotasDaTurma);
console.log([].concat(notas[0], notas[1]));

const notasFlatMap = escola.flatMap(getNotasDaTurma);
console.log(notasFlatMap);