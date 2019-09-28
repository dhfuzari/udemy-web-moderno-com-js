const escola = 'Cod3r';

console.log('Índice 4: ', escola.charAt(4));
console.log('Índice 5: ', escola.charAt(5)); // Não retorna erro

console.log('Índice 3(char code ASCII): ', escola.charCodeAt(3));

console.log('substring 1: ', escola.substring(1));
console.log('substring 1: ', escola.substring(0, 3));

console.log('Concatenação de strings ', 'Escola'.concat(escola).concat("!"));
console.log('Concatenação de strings ', 'Escola ' + escola + '!');

console.log('Replace: ', escola.replace(3, 'e'));
console.log('Replace com regx: ', escola.replace(/\d/, 'W'));

console.log('Specialized,Corratec,Kona,Santa Cruz'.split(','));