const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao);
    }
}

pessoa.falar();


// Conflito entre paradigmas da programação funcional e O.O. Nesse caso
// o fato de armazenar a função falar do objeto pessoa na variável "falar", 
// não faz  com que essea função seja chamada no escope que foi definida(objeto  
// pessoa), mais sim, no escopo que está sendo referenciada.
const falar = pessoa.falar;
falar();


// Uma das formas de resolver isso, é fazendo o bind da função passando como 
// parâmetro o objeto que se deseja que seja resolvido o this para aquela função
const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();