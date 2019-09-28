// Uma factory retorna um novo objeto. Nesse caso estamos exportando um função que a cada vez que for
// chamada, retornará uma nova instancia de um objeto

module.exports = () => {
  return {
    valor: 0,
    inc() {
      this.valor++;
    }
  }
}