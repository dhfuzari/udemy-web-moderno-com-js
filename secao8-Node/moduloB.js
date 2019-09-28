// Outra forma(a forma padrão na verdade) de exportar as coisas no Node JS - Essa é a forma mais clássica.
// Exportar diretamente um objeto com tudo oque se deseja exportar de uma só vez, dentro do objeto
// module.exports. Obs.: Quando usamos essa forma, estamos substituindo o objeto padrão inteiro, e isso
// só pode ser feito com a referencia module.exports, e não com as referências "this" e "exports"

this.teste = 'TESTE'; // Isso(valor "".teste") não funcionará no arquivo que importar esse módulo, porque
// como foi explicado acima, com o uso de module.exports apontando para uma nova referencia(ao invéz de
// apontar para apenas um valor), estamos criando uma nova referencia para o objeto do módulo em questão.

module.exports = {
  bomDia: 'Bom dia',
  boaNoite() {
    return 'Boa noite'
  }
}