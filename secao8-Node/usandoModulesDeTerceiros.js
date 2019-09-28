// 1- Usando módulos de terceiros
// 2 - Instalando e usando o nodemon para rodar scripts monitorados - https://nodemon.io/
// Como instalar: "npm install -g nodemon"
// Como usar: no lugar do comando "node nome-do-script.js", usar o comando "nodemon nome-do-script.js"
// e toda e qualquer alteração que for feita no código, o nodemon detectará e recarregará automaticamente
// o script que está sendo executado

// Para importar um módulo de terceiro - node_modules - em Node JS, apenas usamos o nome do módulo como
// parâmetro para a função require, sem a necessidade de especificar o caminho da pasta "node_modules"
const _ = require('lodash');
setInterval(() => console.log(_.random(1, 1000)), 2000);