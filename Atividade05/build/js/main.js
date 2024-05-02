"use strict";
// type assertion ou type casting - atribuir a mesma variável a diferentes tipos que possua
//exemplo possui uma string e o tipo any, assim assertion determina que o seu valor pode ser especificado de forma determinante
let exemplo = '1234';
let varNumber = exemplo;
let varString = exemplo;
let a = 45;
let b = a;
let c = b; //não é possível pois a atribuição é uma string
let d = 'OláMundo';
let e = d;
let f = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
//typescript da erro pq a função é do tipo union
let resultado = addOrConcat(2, 2, 'add');
//agora com assertion
let meuResultado = addOrConcat(2, 2, 'concat');
//Cuidado pode dar erro pois é sabido que o retorno será uma string
let segundoResult = addOrConcat(2, 2, 'concat');
// usando assertion de forma dupla para burlar o TS
10;
10;
//assertion é bom para ser usado com o DOM, pois a designação sempre retorna null ou 'HTMLElement'
//Usando a ! no assertion determina que o elemento não será 'null'
const img = document.querySelector('img');
const myImg = document.getElementById('#myId');
const nextImg = document.getElementById('#myImg');
//ao acessar a prop src é preciso determinar especificamente o type
console.log(img.src);
console.log(myImg.src);
