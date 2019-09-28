/*
O conceito de hosting se resume basicamente em elevar a declaração de uma váriável
para o nível mais alto de uma função(ou escopo global) em que ela foi definida,
resultando em uma váriável UNDEFINED ao invéz de NOT DEFINED. Porém o cuidade que
se deve ter é que isso acontece apenas com o uso da palavra chave var e nunca 
com let e/ou const
*/

try {
    console.log('a: ', a);
    var a = 100;
    console.log('a: ', a);

    console.log('\n ================================= \n')

    // O código acima é equivalente ao código a baixo
    var b;
    console.log('b: ', b);
    b = 200;
    console.log('b: ', b);
    
} catch(e) {
    console.log('Erro encontrado', e);
}

try {
    console.log('b: ', b);
    let b = 200;
    console.log('b: ', b);
} catch(e) {
    console.log('Erro encontrado', e);
}