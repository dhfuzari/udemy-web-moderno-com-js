/*
 * Os dois resultados serão diferentes apesar do nome da variável ser o mesmo
 * porque variáveis definidas com var tem escopo global e escopo de função, 
 * enquanto que variáveis definidas com a palavra reservada let tem escopo
 * global, escopo de função e escopo de bloco
*/

var numero = 1;

{
    let numero = 2;
    console.log('dentro = ', numero);
}

console.log('fora = ', numero);