/*
Destructuring é uma forma conveniente de extrair multiplos valores de dados
armazenados em objetos e arrays.
*/

const pessoa = {
    nome: 'Ana',
    idade: 20,
    endereco: {
        logradouro: 'Rua Abc',
        numero: 1000
    }
};

// Destructuring das chaves nome e idade do objeto pessoa para as novas
// variáveis nome e idade
const { nome, idade } = pessoa;

// Linha 17 é equivalente as linhas 20 e 21
// const nome = pessoa.nome;
// const idade = pessoa.idade;

console.log(nome, idade);

// Destructuring das chaves nome e idade do objeto pessoa com variáveis
// personalizadas para as chaves/nome correspondentes
const { nome: n, idade: i } = pessoa;
console.log(n, i);

// Podemos definir valores padrões para as variáveis criadas no destructuring
// de um objeto/array. Para este caso, sobrenome e bemHumorada são valores
// que não existem no objeto pessoa.
const { sobrenome, bemHumorada = true } = pessoa;
console.log(sobrenome, bemHumorada);

// Destructuring de propriedades de objetos aninhados
const { endereco: { logradouro, numero, cep = '13990-000' } } = pessoa;
console.log(logradouro, numero, cep);




const company = {
    name: "ACME Corp",
    address: "Nowhere st",
    products: {
        shirts: {
            colors: ["red", "green", "blue"]
        },
        socks: {
            colors: ["cyan", "magenta", "yellow"]
        }
    }
};
const getShirtsColorsAmount = ({ products: { shirts: { colors } } }) => {
    console.log(colors);
}
getShirtsColorsAmount(company) // 3