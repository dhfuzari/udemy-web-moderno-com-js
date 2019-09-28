function Pessoa() {
    this.idade1 = 0;
    this.idade2 = 0;

    // Se você não fizer o bind da função passando como referencia o objeto 
    // this que deseja, o this usado será o this da função anônima que foi 
    // passada como parâmetro para o setInterval
    setInterval(function() {
        this.idade1++;
        console.log(`Idade 1: ${this.idade1}`)
    }.bind(this), 1000);

    // Outra forma de driblar o problema do this, é com a definição de uma 
    // constante/variável proxy no escope que está o this que se deseja alcançar
    // e depois usa-lo dentro das funções que forem necessárias
    const self = this; 
    setInterval(function() {
        self.idade2++;
        console.log(` - Idade 2: ${this.idade2}`)
    }.bind(this), 2500);
}

new Pessoa()