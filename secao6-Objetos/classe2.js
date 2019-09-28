// Hernaça em Javascript usando classes(ao invéz de uso de prototype)

class Avo {
  constructor(sobrenome) {
    this.sobrenome = sobrenome;
  }
  imprimirSobrenome() {
    console.log('Sobrenome: ', this.sobrenome);
  }
}

class Pai extends Avo {
  constructor(sobrenome, profissao = 'Professor') {
    super(sobrenome);
    this.profissao = profissao;
  }
  imprimirProfissao() {
    console.log('Profissão: ', this.profissao)
  }
}

class Filho extends Pai {
  constructor(sobrenome, profissao, sexo = 'masculino') {
    super(sobrenome, profissao);
    this.sexo = sexo;
  }
  imprimirSexo() {
    console.log('Sexo: ', this.sexo);
  }
}

const daniel = new Filho('Fuzari', 'Programador');
console.log(daniel)
daniel.imprimirSobrenome();
daniel.imprimirProfissao();
daniel.imprimirSexo();
