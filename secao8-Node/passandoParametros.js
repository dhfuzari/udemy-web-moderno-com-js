// Módulo que recebe parâmetros - Apenas retorne uma função que aceita parâmetros

module.exports = function (...nomes) {
  return nomes.map(nome => `Boa semana ${nome}!`)
}