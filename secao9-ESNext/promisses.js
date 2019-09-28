function logn(data) {
  console.log(data);
  console.log('\n');
}

// Função que retorna uma promisse
function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!isNaN(segundos) && segundos >= 1) resolve(frase) // resolve aceita apenas um parâmentro
      else reject('Você precisa especificar o número de segundos(ao menos 1 segundo)');
    }, segundos * 1000)
  });
}

logn('Começando...');

const promisseRetornada = falarDepoisDe(3, 'Que legal!')
  .then((frase) => frase.concat('!?!?')) // resolve retorna uma função then
  .then((outraFrase) => logn(outraFrase)) // then pode ser chamada quantas vezes for necessário
  .catch(e => logn(e)); // reject retorna uma função catch
logn(promisseRetornada);

const promisseRetornada2 = falarDepoisDe('dois', 'Que legal!')
  .then((frase) => frase.concat('!?!?')) // resolve retorna uma função then
  .then((outraFrase) => logn(outraFrase)) // then pode ser chamada quantas vezes for necessário
  .catch(e => logn(e)); // reject retorna uma função catch
logn(promisseRetornada2);