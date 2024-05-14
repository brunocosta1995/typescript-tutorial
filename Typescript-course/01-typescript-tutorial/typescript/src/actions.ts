export function sayHello(name: string): void {
  console.log(`Hello to ${name}`);
}


export let person = 'susan';

export type Student = {
    name: string;
    age: number
}

const newStudent: Student = {
    name: 'john',
    age: 28
}

export default newStudent;