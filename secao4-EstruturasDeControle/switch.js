const imprimirResultado = function(_nota) {
    const nota = Math.floor(_nota)
    switch(nota) {        
        case 10: case 9: 
            console.log(`Nota ${nota}: Quadro de Honra`);
            break;
        case 8: case 7:
            console.log(`Nota ${nota}: Aprovado`);
            break;
        case 6: case 5: case 4:
            console.log(`Nota ${nota}: Recuperação`);
            break;
        case 3: case 2: case 1: case 0:
            console.log(`Nota ${nota}: Reprovado`);
            break;
        default: 
            console.log(`Nota ${nota} é invalida`);
    }
}

imprimirResultado(2.5);
imprimirResultado(4.5);
imprimirResultado(6);
imprimirResultado(8.1);
imprimirResultado(6);
imprimirResultado(10);