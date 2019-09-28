// tagged templates - processa o template dentro de uma função
function tag(partes, ...valores) {
  console.log('partes', partes);
  console.log('valoes: ', valores);
  return 'Outra string';
}

const aluno = 'Gui';
const situacao = 'Aprovado';

console.log(tag`${aluno} está ${situacao}.`);