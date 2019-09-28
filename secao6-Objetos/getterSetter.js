const sequencia = {
  _valor: 1, // _ para convenção de valores privados

  get valor() {
    return this._valor++
  },
  set valor(valor) {
    if (valor > this._valor)
      this._valor = valor
  }
}

console.log(sequencia.valor, sequencia.valor, sequencia.valor);
sequencia.valor = 10;
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 5; // Não será setado para 5 pela validação feita no método set
console.log(sequencia.valor, sequencia.valor);