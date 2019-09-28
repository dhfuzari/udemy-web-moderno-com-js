// Fazendo o uso de callbacks para fazer 3 requisições no mesmo endpoint e preencher um array
// com o retorno desses 3 requests;

const http = require('http');

const getTurma = (letra, callback) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;

  http.get(url, res => {
    console.log('callback http.get')
    let resultado = '';

    res.on('end', () => {
      console.log('res.on -> end');
      callback(JSON.parse(resultado))
    });

    res.on('data', dados => {
      console.log('res.on -> data');
      resultado += dados;
    });

  })
}

let nomes = [];
getTurma('A', alunos => {
  nomes = nomes.concat(alunos.map(aluno => `A: ${aluno.nome}`));
  getTurma('B', alunos => {
    nomes = nomes.concat(alunos.map(aluno => `B: ${aluno.nome}`));
    getTurma('C', alunos => {
      nomes = nomes.concat(alunos.map(aluno => `C: ${aluno.nome}`));
      console.log(nomes);
    })
  })
});