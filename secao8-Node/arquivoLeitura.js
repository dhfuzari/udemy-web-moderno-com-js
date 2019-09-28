// Leitura de arquivos com o uso do módulo File System - fs - nativo do Node

const fs = require('fs');

const path = __dirname + '/arquivo.json'
console.log(path);

// Operação assíncrona - Com o uso de uma callback que será chamada depois que a operação de leitura
// do arquivo for concluída
fs.readFile(path, 'utf-8', (err, content) => {
  const config = JSON.parse(content);
  console.log(`\n${config.db.host}:${config.db.port}`);
})

// Operação síncrona - trava o event loop enquanto a operação de leitura do arquivo não for concluída
const contentFile = JSON.parse(fs.readFileSync(path, 'utf-8'));
console.log(`\n${contentFile.db.user}:${contentFile.db.password}`);

// Importando um arquivo JSON diretamente com o uso do require. Como o arquivo que estamos usando
// está em formato JSON, já podemos importa-lo diretamente com o uso do require e o parse para objeto
// será automático, sem necessidade do uso de JSON.parse()
const config = require('./arquivo.json');
console.log('Importando um arquivo JSON diretamente com o uso do require')
console.log(config.db);

// Leitura de diretórios com o uso de readdir
fs.readdir(__dirname, (err, content) => {
  console.log(`\nConteúdo da pasta ${__dirname}`);
  console.log(content);
})
