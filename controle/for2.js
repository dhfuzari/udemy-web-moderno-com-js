const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

// For in para arrays: Devolve o indice atual do array para cada iteração
for (let i in notas) {
  console.log(i, ' -> ', notas[i]);
}

// For in para objetos: Devolve o atributo atual atual do objeto para cada iteração
const pessoa = {
  nome: 'Ana',
  sobrenome: 'Silva',
  idade: 29,
  peso: 64,
};

for (let atributo in pessoa) {
  console.log(`${atributo} -> ${pessoa[atributo]}`);
}
