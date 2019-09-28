const anonimo = process.argv.indexOf('-a') !== -1;

if (anonimo) {
  process.stdout.write('Fala anônimo! \n');
  process.exit();
} else {
  process.stdout.write('Informe o nome: ');
  process.stdin.on('data', function (data) {
    const nome = data.toString().replace('\n', '');
    process.stdout.write(`Fala ${nome}!!`);
    process.exit();
  })
}

// console.log('dirname: ', __dirname);