// A estrutura for in retorna o indice de um array ou o atributo de um objeto
// para cada iteração do laço. É uma estrutura mais usada para objetos do que
// para arrays

// for in para arrays
const notas = [6.7, 7.4, 9.8, 8.1, 7.7];
for(let index in notas) {
    console.log(`Nota ${index} = ${notas[index]}`);
}

// for in para objetos
const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 65
};
for(let atributo in pessoa) {
    console.log(`Atributo ${atributo} = ${pessoa[atributo]}`);
}

// console.log(index, atributo); ocorrerá um erro pq usamos 
// let para declarar  nossas variáveis de controle