const nums = [1,2,3,4,5,6,7,8,9,10];

for(let index in nums) {
    if(index == 5) break; // para a execução do laço corrente
    console.log(`Index ${index} = ${nums[index]}`);
}

console.log(' ---------------------------------- ');

for(let index in nums) {
    if(index == 5) continue; // interrompe a repetição corrente e vai para a próxima iteração do laço
    console.log(`Index ${index} = ${nums[index]}`);
}

// Se for necessário parar a execução de um laço externo, você pode usar um 
// rótulo para identificar esse laço e quando necessário usar a instrução break
// seguida do nome desse rótulo para identificar qual laço você quer parar a 
// execução
const values = [1,2,3,4,5,6,7,8,9,10];
externo: for(let i in values) {
    for(let j in values) {
        if(i == 2 && j == 4) break externo;
        console.log(`Par = ${i}, ${j}`);
    }
    console.log('----------');
}