/*
  Closure é o escopo criado quando uma função é declarada. Esse escopo
  permite a função acessar e manipular variáveis externas a função. É o
  escopo externo daquela função, ou seja o escopo que engloba a definição
  daquela função, e por isso independentemente de onde essa função for
  chamada no futuro, ela conseguira ter acesso á esse escopo externo a
  ela, que sempre será carregado consigo durante a execução do programa
*/

const x = 'Global';

function fora() {
  const x = 'Local';
  function dentro() {
    return x;
  }
  return dentro;
}
const minhaFuncao = fora();
console.log(minhaFuncao());
console.log(fora()());
