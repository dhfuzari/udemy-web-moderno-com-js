const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

const funcionariosSexoFeminino = (funcionario) => funcionario.genero === 'F';
const funcionariosChineses = (funcionario) => funcionario.pais === 'China';
const mulherChinesaMenorSalario = (funcionario, funcionarioAtual) =>
  funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual;


axios.get(url).then(response => {
  const funcionarios = response.data;
  const funcionarioEncontrado = funcionarios
    .filter(funcionariosChineses)
    .filter(funcionariosSexoFeminino)
    .reduce(mulherChinesaMenorSalario);

  console.log('### Mulher chinesa de menor salário: ', funcionarioEncontrado);
})

