// Armazenando uma função em uma variável
const imprimirSoma = function(operando_1 = 0, operando_2 = 0) {
    return operando_1 + operando_2;
};

console.log(imprimirSoma(2, 3));

// Armazenando uma função arrow em uma variável
const soma = (operando_1 = 0, operando_2 = 0) => {
    return operando_1 + operando_2;
}

console.log(soma(2, 3));

//Retorno implicito em arrow functions
const subtracao = (operando_1 = 0, operando_2 = 0) => operando_1 - operando_2;

console.log(subtracao(2, 3));

// Arrpw function com apenas 1 parâmetro(não precisa de parênteses na declaração)
const imprimir = text => console.log(text);
console.log(imprimir('Curso web moderno'));