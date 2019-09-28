function Pessoa() {
    this.idade1 = 0;

    // Usando arrow functions, não é necessário fazer o bind do this, pois isso
    // já é feito automaticamente, ou seja, o this da função Pessoa será passado
    // automaticamente para a função que está dentro dela
    setInterval(() => {
        this.idade1++;
        console.log(`Idade 1: ${this.idade1}`)
    }, 1000);

}

new Pessoa()