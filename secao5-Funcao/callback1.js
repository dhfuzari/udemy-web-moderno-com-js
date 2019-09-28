const fabricantes = ['Mercedez', 'Audi', 'Bmw'];

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir);
console.log('\n');
fabricantes.forEach(fabricante => console.log(fabricante));