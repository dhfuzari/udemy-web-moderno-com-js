// "var" não considera escopo de bloco, porém possui escopo de função.
// Portanto se tratando de variáveis criadas com a palavra chave "var",
// só temos dois escopos possíveis: ou possui escopo global - 
// independente do bloco que foi definida, ou possui escopo de função. 

{
    {
        {
            {
                var sera = 'Sera???';
            }
        }
    }
}

console.log('sera: ', sera);

function teste() {
    { var local = 123; }
    console.log(local);
}

teste();

// console.log(local);
// Erro: "local" está definido dentro do escopo da função
// teste() e não pode ser acessdo de fora da função.