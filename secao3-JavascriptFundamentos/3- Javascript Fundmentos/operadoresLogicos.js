function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTV50 = trabalho1 && trabalho2;
    // const comprarTV32 = !!(trabalho1 ^ trabalho2); // bitwise xor
    const comprarTV32 = trabalho1 != trabalho2;
    const manterSaudavel = !comprarSorvete;

    return { comprarSorvete, comprarTV32, comprarTV50, manterSaudavel };
}

console.log(compras(true, false));

