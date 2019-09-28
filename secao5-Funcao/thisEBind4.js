function Pessoa() {
    console.log(this);

    // Usando arrow functions, não é necessário fazer o bind do this, pois isso
    // já é feito automaticamente, ou seja, o this da função Pessoa será passado
    // automaticamente para todas as arrow functions dentro delas, e 
    // consequentemente, para todas as funções filhas dessas funções.
    const arrow1 = () => {
        console.log(this);
        const arrow2 = () => {
            console.log(this);
        }
        arrow2();
    };
    arrow1();
}

new Pessoa()