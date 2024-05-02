// type assertion ou type casting - atribuir a mesma variável a diferentes tipos que possua

//exemplo possui uma string e o tipo any, assim assertion determina que o seu valor pode ser especificado de forma determinante
let exemplo: any = '1234';
let varNumber: number = exemplo as number;
let varString: string = <string>exemplo;


//Outro exemplo
type One = string;
type Two = string | number;
type Three = 'hello';

let a: Two = 45;
let b = a as Two;
let c = <Three>b; //não é possível pois a atribuição é uma string
let d = <One>'OláMundo';
let e = <Two>d
let f = <string | number>'world'

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') return a + b;
    return '' + a + b;
}

//typescript da erro pq a função é do tipo union
let resultado: number = addOrConcat(2, 2, 'add');
//agora com assertion
let meuResultado: string = addOrConcat(2, 2, 'concat') as string;
//Cuidado pode dar erro pois é sabido que o retorno será uma string
let segundoResult: number = <number>addOrConcat(2, 2, 'concat');

// usando assertion de forma dupla para burlar o TS
10 as string
(10 as unknown) as string

//assertion é bom para ser usado com o DOM, pois a designação sempre retorna null ou 'HTMLElement'
//Usando a ! no assertion determina que o elemento não será 'null'
const img = document.querySelector('img')!;
const myImg = document.getElementById('#myId') as HTMLImageElement;
const nextImg = <HTMLImageElement>document.getElementById('#myImg');

//ao acessar a prop src é preciso determinar especificamente o type
console.log(img.src);
console.log(myImg.src);





