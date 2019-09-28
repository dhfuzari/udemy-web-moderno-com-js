// Node faz cache dos módulos. Nesse caso, estamos exportando uma referência de um objeto.

module.exports = {
  valor: 0,
  inc() {
    this.valor++;
  }
}