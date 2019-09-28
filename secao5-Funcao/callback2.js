const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

// Filtrar apenas notas baixas(menos que 7);

// 1- Sem uso de callbacks
let notasBaixas = [];
for(let i in notas) {
    if(notas[i] < 7) {
        notasBaixas.push(notas[i]);
    }
}

console.log(notasBaixas);

// 2- Com o uso de callbacks
notasBaixas = notas.filter(nota => nota < 7);

console.log(notasBaixas);