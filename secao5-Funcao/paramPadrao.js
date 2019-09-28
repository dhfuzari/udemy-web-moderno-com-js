// Estratégia 1 para gerar valor . Obs: não funciona para valores 0, pois 0 é 
// tratado como falso em Javascript
function soma1(a, b, c) {
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a + b + c;
}

console.log(
    soma1(),
    soma1(3),
    soma1(1,2,3),
    soma1(0, 0, 2),
    soma1(0, undefined, 2),
    soma1(0, 2),
    soma1('a', 'b', 100)    
    );

// Estratégia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1;
    b = 1 in arguments ? b : 1;
    c = isNaN(c) ? 1 : c;
    return a + b + c;
}

console.log(
    soma2(),
    soma2(3),
    soma2(1,2,3),
    soma2(0, 0, 2),
    soma2(0, undefined, 2),
    soma2(0, 2),
    soma2('a', 'b', 100)    
    );

// Estratégia 5 - Valor padrão no ES2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c;
}

console.log(
    soma3(),
    soma3(3),
    soma3(1,2,3),
    soma3(0, 0, 2),
    soma3(0, undefined, 2),
    soma3(0, 2),
    soma3('a', 'b', 100) 
    );