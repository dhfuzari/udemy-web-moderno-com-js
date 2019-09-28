// Coleção dinâmica de pares chave/valor

// Produto
const produto = new Object();
produto.nome = 'Cadeira';
produto['marca do produto'] = 'Genérica';
produto.preco = 220;

console.log(produto);

delete produto.preco;
delete produto['marca do produto'];

console.log(produto);
console.log(' ------------------------------- ');

// Carro
const carro = {
  modelo: 'A4',
  valor: 8900,
  proprietario: {
    nome: 'Raul',
    idade: 50,
    endereco: {
      logradouro: 'Rua Nuporanga',
      numero: 475,
    },
  },
  condutores: [
    {
      nome: 'Geraldo',
      idade: 65,
    },
    {
      nome: 'Antonia',
      idade: 60,
    },
  ],
  calculaValorSeguro: function() {
    // ...
  },
};

carro.proprietario.endereco.numero = 1000;
carro['proprietario']['endereco']['logradouro'] = 'Av. Norte Sul';
console.log(carro);
console.log(' ------------------------------- ');

delete carro.condutores;
delete carro.proprietario.endereco;
delete carro.calculaValorSeguro;
console.log(carro);
console.log(carro.condutores);
console.log(carro.condutores.length); // Erro
