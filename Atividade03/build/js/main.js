"use strict";
//ARRAYS
let stringArr = ['bruno', 'costa', 'silva'];
let arrNumbStr = ['john', 44, 'dave'];
let arrBoolStrNumb = [true, 'ok', 1995];
stringArr.push(1999);
stringArr.unshift(arrBoolStrNumb[1]);
const varStr = arrBoolStrNumb[1]; // varStr possui tbm a determinação dos tipos de arrBoolStrNumb
stringArr[0] = varStr;
arrNumbStr = arrBoolStrNumb;
arrNumbStr = stringArr;
console.log(stringArr);
console.log(arrNumbStr);
console.log(arrBoolStrNumb);
let bands = [];
bands.push(stringArr[0]);
let test = [];
bands = test;
test = bands;
let myTuple = ['bruno', 28, true]; //Array Tuple restrito em tipo, posição, quantidade
myTuple.push('arr'); //adc novo elemento
myTuple[3] = 'tereza';
console.log('tupla = ' + myTuple);
let myArr = ['pamella', 22, false];
myTuple = myArr;
myArr = myTuple;
0;
//OBJECTS
let obj;
obj = {};
obj = [];
obj = stringArr;
console.log(typeof obj); //ainda é coniderado como object
const cadastro = {
    nome: 'Bruno',
    existe: true
};
cadastro.nome = 42;
cadastro.nome = 'Pamella';
cadastro.existe = 52;
cadastro.existe = false;
let novoCurso = {
    nome: 'programação',
    status: true,
    alunos: [1, 4, 'bruno']
};
console.log(novoCurso);
//todos os atributos devem ser preenchidos do tipo determinado
let curso1 = {
    nome: 'matemática',
    qtdAlunos: 42,
    status: true,
    alunos: ['anderson', 24, 'mateus', 19]
};
let curso2 = {
    nome: 'portugues',
    qtdAlunos: 60,
    // status: true,
    alunos: ['jeferson', 18, 'alessandra', 33]
};
let curso3 = {
    // nome: 'inglês',
    // qtdAlunos: 77,
    status: false,
    alunos: ['jenifer', 29, 'mariana', 22]
};
curso1 = curso2;
curso1 = curso3;
//curso.nome tbm é opcional então ele não aceita função ao menos que seja declarado '?'
//if utilizado para contornar erro do typescript
const verificaCurso = (curso) => {
    if (curso.nome) {
        return (`Esse é o curso: ${curso.nome.toUpperCase()}`);
    }
    else {
        return (`Curso não verificado!`);
    }
};
console.log(verificaCurso(curso3));
// Enums são uma funcionalidade adicionada ao JavaScript pelo TypeScript
// na qual facilita o manuseio de grupos de constantes nomeadas.
// Por padrão um enum é baseado em números, começando no zero,
// e para cada opção é assinalado um número incrementado por um.
// Isso é útil quando o valor em si não importa.
var OldNotas;
(function (OldNotas) {
    OldNotas[OldNotas["E"] = 0] = "E";
    OldNotas[OldNotas["D"] = 1] = "D";
    OldNotas[OldNotas["C"] = 2] = "C";
    OldNotas[OldNotas["B"] = 3] = "B";
    OldNotas[OldNotas["A"] = 4] = "A";
})(OldNotas || (OldNotas = {}));
var Notas;
(function (Notas) {
    Notas[Notas["S"] = 0] = "S";
    Notas[Notas["E"] = 1] = "E";
    Notas[Notas["D"] = 3] = "D";
    Notas[Notas["C"] = 4] = "C";
    Notas[Notas["B"] = 5] = "B";
    Notas[Notas["A"] = 6] = "A";
})(Notas || (Notas = {}));
console.log(Notas.E);
console.log(Notas.S);
console.log(Notas.D);
console.log(Notas.C);
