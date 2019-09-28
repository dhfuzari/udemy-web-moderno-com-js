let valor; // não inicializada
console.log(valor);

valor = null; // ausência de valor
console.log(valor);
// console.log(valor.toString()); // Erro ao tentar acessar o método toString de uma valor null;

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; // evite atribuir undefined
console.log(!!produto.preco);
// delete produto.preco;
console.log(produto);

produto.preco = null;
console.log(!!produto.preco);
console.log(produto);

/* Conclusão: Nunca use undefined para setar uma variável sem valor. Deixe  
 * undefined apenas para uso da linguagem, para vc saber que quando receber
 * um valor undefined, aquela variável realmente nunca recebeu nenhum valor
 * desde que foi criada/definida. Use null para o caso em que precise resetar
 * o valor e/ou referência de uma váriavel. Null significa que a variável agora
 * á partir desse ponto, não guarda mais nenhum valor ou referência em seu 
 * programa.  
 */