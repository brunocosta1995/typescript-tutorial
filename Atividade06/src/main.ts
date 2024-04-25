//Typescript Classes
class coder {
    name : string;
    music: string;
    age  : number;
    lang : string

    constructor (
        name : string,
        music: string,
        age  : number,
        lang : string
        ) {
            this.name  = name;
            this.music = music;
            this.age   = age;
            this.lang  = lang;
    }
}


//é possível declarar tudo nos parâmetros do construtor
//assim evita erros na declaração
//não é necessário atribuir no corpo do construtor, é opcional
class programador {
    
    /*
    operador ! (non-null assertion) fala que o atributo não será nulo
    e terá um valor atribuído por isso não precisa declará-lo no construtor
    */
    segundoIdioma!: string;
    
    constructor (
        public readonly nome: string,
        public musica: string,
        private idade: number,
        protected curso: string = 'Typescipt' // se torna opcional devido a atribuição
    )
    {
        // this.nome = nome;
        // this.musica = musica;
        // this.idade = idade;
        // this.curso = curso;
    }

    public getIdade() {
        return `Olá a minha idade é ${this.idade}`;
    }
}

const Bruno = new programador('Bruno', 'LP', 28);

console.log(Bruno.getIdade());
console.log(Bruno.nome);
//Não é possível acessar diretamente são atributos com restrições
// console.log(Bruno.idade);
// console.log(Bruno.curso);

class WebDev extends programador{
    constructor (
        public computer: boolean,
        nome: string,
        music: string,
        age: number
    ) {
        super(nome, music, age); 
        this.computer = computer;
    }

    public getLinguagem() {
        return `Minha Linguagem de Programação é ${this.curso}`;
    }
}

const Pamella = new WebDev(true, 'Pamella', 'EDM', 22);
console.log(Pamella.getLinguagem());
//Mesmo extendendo ainda não é possível acessar atributos protegidos
// console.log(Pamella.idade);
// console.log(Pamella.curso);

/*-----------------------------------------------------------------------------------------------*/
interface Musico {
    nome: string;
    instrumento: string;
    tocar(tecnica: string): string;
}

class Guitarrista implements Musico {
    nome: string;
    instrumento: string;

    constructor(nome: string, instrumento: string) {
        this.nome = nome;
        this.instrumento = instrumento
    }

    tocar(tecnica: string) {
        return `${this.nome} está tocando ${this.instrumento} com a técnica ${tecnica}`;
    }
}

const Hendrix  = new Guitarrista('Jimi', 'Guitarra');
console.log(Hendrix.tocar('Solo'));
/*-----------------------------------------------------------------------------------------------*/


class Contadora {
    static contagem: number = 0;

    static getContagem() {
        return this.contagem;
    }

    id: number

    constructor(public nome: string) {
        this.nome = nome;
        this.id = ++Contadora.contagem;
    }
}

const primeiro = new Contadora('Jeferson');
const segundo = new Contadora('Pamela');
const terceiro = new Contadora('Sara');

console.log(`O numero de contagens é ${Contadora.contagem}`);
console.log(primeiro.id);
console.log(terceiro.id);
/*-----------------------------------------------------------------------------------------------*/
// Usando set e get

class Bandas {
    private dataState: string[];

    constructor(){
        this.dataState = [];
    }

    public get data(): string[] {
        return this.dataState
    }

    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
        } else throw new Error ('Parâmetros incorretos, não são um array de strings')
    }
}

const primeiroShow = new Bandas();
primeiroShow.data = ['Queen', 'Led', 'Kiss'];

const segundoShow = new Bandas();
// segundoShow.data = [182, 'LP', 'Nirvana'];

console.log(primeiroShow.data);
console.log(segundoShow.data);
