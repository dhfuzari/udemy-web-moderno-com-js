// Fazendo o uso de promisses para fazer 3 requisições no mesmo endpoint e preencher um array
// com o retorno desses 3 requests;

const http = require('http');

const getTurma = letra => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;

  return new Promise((resolve, reject) => {
    http.get(url, res => {
      let resultado = '';

      res.on('data', dados => resultado += dados);

      res.on('end', () => {
        try {
          resolve(JSON.parse(resultado))
        } catch (e) {
          reject(e);
        }
      });
    })
  })

}

let nomes = [];

getTurma('A').then(alunos => {
  nomes = nomes.concat(alunos.map(aluno => `A: ${aluno.nome}`));

  getTurma('B').then(alunos => {
    nomes = nomes.concat(alunos.map(aluno => `B: ${aluno.nome}`));

    getTurma('C').then(alunos => {
      nomes = nomes.concat(alunos.map(aluno => `C: ${aluno.nome}`));
      console.log(nomes);
    })
  })
});