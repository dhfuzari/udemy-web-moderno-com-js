// forEach - executa uma dada função em cada elemento de um array
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

aprovados.forEach(function (el, index, array) {
  console.log(`${index}) ${el}`);
})

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados);