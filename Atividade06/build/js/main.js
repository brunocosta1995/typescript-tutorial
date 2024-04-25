"use strict";
//Typescript Classes
class coder {
    constructor(name, music, age, lang) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
}
//é possível declarar tudo nos parâmetros do construtor
//assim evita erros na declaração
//não é necessário atribuir no corpo do construtor, é opcional
class programador {
    constructor(nome, musica, idade, curso = 'Typescipt' // se torna opcional devido a atribuição
    ) {
        this.nome = nome;
        this.musica = musica;
        this.idade = idade;
        this.curso = curso;
        // this.nome = nome;
        // this.musica = musica;
        // this.idade = idade;
        // this.curso = curso;
    }
    getIdade() {
        return `Olá a minha idade é ${this.idade}`;
    }
}
const Bruno = new programador('Bruno', 'LP', 28);
console.log(Bruno.getIdade());
console.log(Bruno.nome);
//Não é possível acessar diretamente são atributos com restrições
// console.log(Bruno.idade);
// console.log(Bruno.curso);
class WebDev extends programador {
    constructor(computer, nome, music, age) {
        super(nome, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLinguagem() {
        return `Minha Linguagem de Programação é ${this.curso}`;
    }
}
const Pamella = new WebDev(true, 'Pamella', 'EDM', 22);
console.log(Pamella.getLinguagem());
class Guitarrista {
    constructor(nome, instrumento) {
        this.nome = nome;
        this.instrumento = instrumento;
    }
    tocar(tecnica) {
        return `${this.nome} está tocando ${this.instrumento} com a técnica ${tecnica}`;
    }
}
const Hendrix = new Guitarrista('Jimi', 'Guitarra');
console.log(Hendrix.tocar('Solo'));
/*-----------------------------------------------------------------------------------------------*/
class Contadora {
    static getContagem() {
        return this.contagem;
    }
    constructor(nome) {
        this.nome = nome;
        this.nome = nome;
        this.id = ++Contadora.contagem;
    }
}
Contadora.contagem = 0;
const primeiro = new Contadora('Jeferson');
const segundo = new Contadora('Pamela');
const terceiro = new Contadora('Sara');
console.log(`O numero de contagens é ${Contadora.contagem}`);
console.log(primeiro.id);
console.log(terceiro.id);
/*-----------------------------------------------------------------------------------------------*/
// Usando set e get
class Bandas {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
        }
        else
            throw new Error('Parâmetros incorretos, não são um array de strings');
    }
}
const primeiroShow = new Bandas();
primeiroShow.data = ['Queen', 'Led', 'Kiss'];
const segundoShow = new Bandas();
// segundoShow.data = [182, 'LP', 'Nirvana'];
console.log(primeiroShow.data);
console.log(segundoShow.data);
