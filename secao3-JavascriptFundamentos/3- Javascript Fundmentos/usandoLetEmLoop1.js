// Usando a palavra chave let em um loop for, a variável "i" criada para controle
// não ficará disponível fora do laço, porque variáveis criadas com a palavra
// chave let possuem escopo de bloco, e por isso não ficará visível fora desse
// bloco de código que ela foi criada

for(let i = 0; i < 10; i++) {
    console.log(i);
}

try {
    console.log('Depois do loop for: ', i);
} catch(e) {
    console.log(e);
}