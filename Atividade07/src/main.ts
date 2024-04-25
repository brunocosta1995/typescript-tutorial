//Index Signature

// interface TransactionObj {
//     readonly [index: string]: number
// }

interface TransactionObj {
  readonly [index: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
}

const todayTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
  Bruno: 50
};

console.log(todayTransactions.Pizza);
console.log(todayTransactions["Pizza"]);

let props: string = "Pizza";
console.log(todayTransactions[props]);

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transact in transactions) {
    total += transactions[transact];
  }
  return total;
};

console.log(todaysNet(todayTransactions));
// todayTransactions.Bruno = 50;
console.log(todayTransactions["Bruno"]); //a única forma de acessar propriedade não existente (adicionar) no readonly
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

interface Student {
    // [key: string]: string | number | number[] | undefined    //é necessário adicionar undefined pois a prop. implementada é opcional '?'
    name: string,
    GPA: number,
    classes?: number[]
}

const student: Student = {
    name: 'Bruno',
    GPA: 3.5,
    classes: [100,200]
}

// console.log(student.test);

// for (const key in student) {
//     console.log(`${key}: ${student[key]}`)
// }

///versão alternativa para acessar o objeto utilizando assertions
for (const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`)
}

//alternativa sem citar o type do interface
Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student]);
})


const keyOfStudent = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`);
}

keyOfStudent(student, 'name');

///////////////////////////////////////////////////////////////////////////////

//Record Utility Type é igual ao Index Signature
// interface Incomes {
//     [key: string]: number
// }

type Streams = 'salary' | 'bonus' | 'sidehustle';

type Incomes = Record<Streams, number | string>  //tem o mesmo type ou tipo da interface comentada
                                                //A difenreça está em usar a utilidade do Record como type

const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
}

for (const revenues in monthlyIncomes) {
    console.log(monthlyIncomes[revenues as keyof Incomes]);
}