// Uso de caminho relativos para acessar seus módulos. Sempre respeite o nome de arquivos como case sensitive
// porque servidores linux são case sensitive

// Chamando um modulo que se chama "moduloA.js". Lembrando que não é necessário digitar-mos a extensão
// do arquivo .js para importar-mos um módulo já que estamos dentro de um runtime JS que é o NodeJS
const moduloA = require('../../moduloA');
console.log('--- ', moduloA.ola, '---');

// Importando um módulo de terceiro, de dentro da pasta node_modules. Precisamos apenas digitar o nome do
// módulo, e o Node buscará esse modulo(nome-modulo/index.js) diretamente da pasta node_modules
const saudacao = require('saudacao');
console.log(saudacao.ola);

// Chamando um módulo que se chama "index.js" dentro da pasta "moduloC"
const testePadraoModuloLocal = require('../moduloC');
console.log(testePadraoModuloLocal.saudacao);

// Importanto um módulo CORE do Node
const http = require('http');
http.createServer((req, res) => {
  res.write('Bom dia!');
  res.end()
}).listen(8080);