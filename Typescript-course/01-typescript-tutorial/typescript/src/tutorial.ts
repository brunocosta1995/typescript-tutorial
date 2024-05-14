// let person: [string, number] = ['john', 24];

// let data: readonly [number, number, number] = [29, 6, 1995];

// let opcional: [string, number?] = ['bruno'];

// const returnPerson = (): [string, number] => {
//   return person;
// }

// console.log(returnPerson()[1]);

// enum ServerResponse{
//   success = 'success',
//   error = 'error'
// }

// Object.values(ServerResponse).forEach((values) => {
//   if (typeof values === 'number') {
//     console.log(values);

//   }

// })

// console.log(ServerResponse);

// interface ServerStatus {
//   result: ServerResponse,
//   data: string[]
// }

// function getServerResponse(): ServerStatus {
//   return {
//     result: ServerResponse.success,
//     data: ['firstData', 'secondData']
//   }
// }

// console.log(getServerResponse());

// enum UserRole {
//   Admin,
//   Manager,
//   Employee
// }

// type User = {
//   id: number;
//   name: string;
//   role: UserRole;
//   contact: [email: string, phone: string]
// }

// function createUser(user: User): User {
//   return user;
// }

// const userBruno = createUser(
//   {
//     id: 1,
//     name: 'bruno',
//     role: UserRole.Employee,
//     contact: ['bruno@bruno.com', '1999523288']
//   }
// )
//  console.log(userBruno);

// let strName: string = 'Bruno';
// let strLength: number = (<string>strName).length;

// type Bird = {
//   name: string
// }

// let birdString = '{"name": "Eagle"}';
// let dogString = '{"breed": "Poodle"}';

// let newBird = JSON.parse(birdString);
// let newDog = JSON.parse(dogString);

// let bird = newBird as Bird;
// let dog = newDog as Bird;

// console.log(bird.name);
// console.log(dog.name);

// let unknownValue: unknown;

// unknownValue = "bruno";
// unknownValue = 44.236554;
// unknownValue = true;

// if (typeof unknownValue === "number") {
//   let newValue = unknownValue.toFixed(2);
//   unknownValue = newValue;
// }

// function runCode() {
//   let value = Math.random();
//   if (value < 0.5) {
//     throw new Error("Somenthing went wrong");
//   } else {
//     throw "new error";
//   }
// }

// try {
//   runCode();
// } catch (error) {
//   if (error instanceof Error) {
//     console.log(error.message);
//   } else {
//     console.log(error);
//     console.log("erro ocorrido");
//   }
// }


// let value: never;

// type Theme = 'dark' | 'light';

// function checkTheme(theme: Theme) {
//   if (theme === 'dark') {
//     console.log('this is dark');
//     return;
//   } else if (theme === 'light') {
//     console.log('this is light');
//     return;
//   }
//   theme
// }

// enum Color {
//   Red,
//   Blue,
//   // Green
// }

// function getColor(color: Color) {
//   switch (color) {
//     case Color.Red:
//       return 'red';
//     case Color.Blue:
//       return 'blue';
//     default:
//       let inesperado: never = color;
//       throw new Error(`Valor de cor não experado: ${inesperado}`);
//   }
// }


// console.log(getColor(Color.Red));
// console.log(getColor(Color.Blue));
// console.log(getColor(Color.Green));



// const susan = 'susan';

// const name = 'name';

import newStudent, {sayHello, person, type Student} from "./actions";

sayHello('Typescript');
console.log(newStudent);
console.log(person);

const anotherStudent: Student = {
  name: 'Bruno',
  age: 28
}

console.log(anotherStudent);

import {example} from './example.js';

console.log(example);

