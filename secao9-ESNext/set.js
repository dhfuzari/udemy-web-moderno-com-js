// Set - Estrutura de conjunto não indexada que não aceita repetição

const times = new Set();

times.add('Vasco');
times.add('São Paulo');
times.add('Palmeiras');
times.add('Corinthinas');
times.add('Flamengo').add('Fluminese').add('Gremio').add('Internacional');
times.add('Vasco'); // Não cria elementos repetidos

console.log(times);

// Set Api
console.log(times.size);
console.log(times.has('vasco'));
console.log(times.has('Vasco'));
times.delete('Flamengo');
console.log(times.has('Flamengo'));
console.log(times.size);

// Outra forma de se criar uma estrutura do tipo Set
const nomes = ['Raquel', 'Bruna', 'Júlia', 'Maria', 'Raquel'];
const nomesSet = new Set(nomes);
console.log(nomesSet);


