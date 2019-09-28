console.log(Math.ceil(6.1));
console.log(Math.floor(6.1));

const obj1 = {};
obj1.nome = 'triangulo';
console.log(obj1);
obj1['nome'] = 'circulo';
console.log(obj1)

const obj2 = {
    nome: 'losango'
};
console.log(obj2);

function Obj(nome) {
    this.nome = nome;
    this.exec = function() {
        console.log('Exec...');
    }
}
const obj3 = new Obj('Cadeira');
const obj4 = new Obj('Mesa');

console.log(obj3.nome, obj4.nome);
obj4.exec();