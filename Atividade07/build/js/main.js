"use strict";
//Index Signature
const todayTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    Bruno: 50
};
console.log(todayTransactions.Pizza);
console.log(todayTransactions["Pizza"]);
let props = "Pizza";
console.log(todayTransactions[props]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transact in transactions) {
        total += transactions[transact];
    }
    return total;
};
console.log(todaysNet(todayTransactions));
// todayTransactions.Bruno = 50;
console.log(todayTransactions["Bruno"]); //a única forma de acessar propriedade não existente (adicionar) no readonly
const student = {
    name: 'Bruno',
    GPA: 3.5,
    classes: [100, 200]
};
// console.log(student.test);
// for (const key in student) {
//     console.log(`${key}: ${student[key]}`)
// }
///versão alternativa para acessar o objeto utilizando assertions
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
//alternativa sem citar o type do interface
Object.keys(student).map(key => {
    console.log(student[key]);
});
const keyOfStudent = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
keyOfStudent(student, 'name');
//A difenreça está em usar a utilidade do Record como type
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
for (const revenues in monthlyIncomes) {
    console.log(monthlyIncomes[revenues]);
}
