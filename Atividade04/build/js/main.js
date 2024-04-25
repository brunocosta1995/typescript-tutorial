"use strict";
//Literal types
let myName;
// userName = 'Pamella';
let userName;
userName = 'Bruno';
userName = 'Pamella';
// userName = 'João';
//funções com typescript
//indicando os tipos de parâmetros a serem aceitos e tbm o tipo do retorno
const add = (a, b) => {
    return a + b;
};
//tipo void determina que a função não irá retornar nenhum tipo de valor
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello World!');
logMsg(`A soma é ${add(2, 5)}`);
let subtract = function (c, d) {
    return c - d;
};
logMsg(`A subtração é ${subtract(10, 5)}`);
let multiply = function (c, d) {
    return c * d;
};
logMsg(`Multiplicação é ${multiply(10, 10)}`);
let division = (a, b) => {
    return a / b;
};
logMsg(`A divisão é ${division(50, 10)}`);
//parâmetro opcional '?' - o opcional deve vir por último
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    else {
        return a + b;
    }
};
//parâmetros default - padrão atribuidos
const sumAll = (a = 50, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 2, 1)); //5
logMsg(addAll(2, 2)); //4
logMsg(sumAll(2, 2, 3)); //7
logMsg(sumAll(2, 2)); //6
logMsg(sumAll(undefined, 2)); //54 - passado o parâmetro undefined, o valor atribuído é o padrão
//operador spread - '...valores' em funções, deve ficar no final dos parâmetros declarados
const total = (a, ...nums) => {
    return a + nums.reduce((prev, current) => prev + current);
};
logMsg(`Soma do operador spread(...valores) = ${total(1, 2, 3, 4)}`);
//never type - utilizado em funções que retornam erros ou em loops infinitos
const createError = (msg) => {
    throw new Error(msg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 10) {
            break; //transforma a função de retorno never para void
        }
    }
};
//criando um type como proteção - type guard
//o operador ternário consegue contornar o return never
const isNumber = (valor) => {
    return typeof valor === 'number' ? true : false;
};
//utilizar return never quando o retorno não é explicito e o typescript precisa aceitar um valor
//O if cria condições não deixando o retorno explicito
const returnNever = (valor) => {
    if (isNumber(valor))
        return 'number';
    if (typeof valor === 'string')
        return 'string';
    return createError('Isso não devia acontecer');
};
