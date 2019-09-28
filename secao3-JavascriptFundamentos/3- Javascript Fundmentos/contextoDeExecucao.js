/*
    Contexto de execução Javascript em Node.
    Em Node, o objeto global equiva ao objeto window do browser, e this não
    aponta para a mesma referência de global.
    Em NOde, quando se coloca alguma coisa em this(this.c = 'C' por exemplo), 
    oque acontece é que você exportou esse valor para fora desse seu arquivo 
    atual, lembrando que em Node cada arquivo é um módulo.

    Por exemplo:

    Esses dois trechos de código são equivalente em Node
    
    -----------------------

    this.c = 456;
    this.d = 789;

    -----------------------

    module.exports = { c: 456, d: 789 }

    -----------------------

*/

let a = 3;
global.b = 123;
this.c = 456;
this.d = 789;

console.log('1- ', this === global);
console.log('2- ', this === module.exports);

console.log('3- ', this.a);
console.log('4- ', this.b);
console.log('5- ', global.a);
console.log('6- ', global.b);
console.log('7- ', this.c);
console.log('8- ', global.c);
console.log('9- ', global.c);
console.log('10- ', module.exports.c);
console.log('11- ', module.exports);
