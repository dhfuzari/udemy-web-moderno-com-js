// Parâmetros em javascripts não são obirgatórios, e uma função pode receber um número maior ou menor
// de parametros que ela está esperando. O objeto arguments é uma variável local disponível dentro de
// todas as funções, que contém um registro para cada argumento fornecido para a função, com o índice
// do primeiro registro começando em 0(zero)

function soma() {
    console.log('\n --- \n');
    console.log(arguments);
    let soma = 0;
    for (i in arguments) {
      soma += arguments[i];
    }
    return soma;    
  }
  
  console.log(soma());
  console.log(soma(1));
  console.log(soma(1.1, 2.2, 3.3, 4.4));