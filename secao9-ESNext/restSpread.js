// operador ... rest(juntar)/spread(espalhar)
// usar rest como parâmetro de função

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 123456.8 };
const clone = { ativo: true, ...funcionario };
console.log('clone: ', clone)
console.log('funcionario ', { ...funcionario });

// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria'];
const grupoFinal = ['Maria', ...grupoA, 'Rafaela'];
console.log('grupoFinal ', grupoFinal); s