// Usando a palavra chave var em um loop for, a variável "i" criada para controle
// ficará disponível também fora do laço, porque variáveis criadas com a palavra
// chave var não possuem escopo de bloco, apenas escopo global e de função

for(var i = 0; i < 10; i++) {
    console.log(i);
}

console.log('Depois do loop for: ', i);