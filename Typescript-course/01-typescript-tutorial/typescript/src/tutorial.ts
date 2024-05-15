type ValueType = string | number | boolean;

let value: ValueType;
const random = Math.random();
value = random < 0.33 ? 'Hello' : random < 0.66 ? 123.456 : true;

function checkValue(value: ValueType) {
  if (typeof value === 'string') {
    console.log(value.toLowerCase());
    return;
  }
  if (typeof value === 'number') {
    console.log(value.toFixed(2));
    return;    
  }
  if (typeof value === 'boolean') {
    console.log(`boolean: ${value}`);
    return;
  }
}

checkValue(value);

type Dog = {type: 'dog'; name: string; bark: ()=> void}
type Cat = {type: 'cat'; name: string; meow: ()=> void}

type Animal = Dog | Cat;

function makeSound(animal: Animal) {
  if (animal.type === 'dog') {
    animal.bark();
  } else {
    animal.meow();
  }
}

const newDog: Dog = {
  type: 'dog',
  name: 'bruno',
  bark() {
    console.log('awaw');
  },
}
const newCat: Cat = {
  type: 'cat',
  name: 'chanel',
  meow() {
   console.log('miau');
    
  }
}

// makeSound(newDog);
// makeSound(newCat);

function newSound(animal: Animal) {
  if ('bark' in animal) {
    animal.bark();
  } else {
    animal.meow();
  }
}

newSound(newDog);
newSound(newCat);

function printLength(str: string | null | undefined) {
  if (str) {
    console.log(str.length);    
  } else {
    console.log(`${str} - No string provided`);
  }
}

printLength('Bruno');
printLength(undefined);

try {
  throw new Error("Erro ocorrido");
} catch (error) {
  if (error instanceof Error){
    console.log('Erro do Error object: ' + error.message);
  } else {
    console.log('Erro desconhecido');
  }
}

function checkInput(input: Date | string) {
  if (input instanceof Date) {
    return input.getFullYear().toString();
  } else {
    return input;
  }
}


const today = new Date();

console.log(checkInput(today));
console.log(checkInput('bruno'));

type Student = {
  name: string;
  study(): void
}

type User = {
  name: string;
  login(): void
}

type Person = Student | User;

const randomPerson = (): Person => {
  return Math.random() > 0.5 
  ? {name: 'john', study() {console.log('studying');} }
  : {name: 'mary', study() {console.log('logging in');}}
}

const person = randomPerson();

function isStudent(person: Person): person is Student {
  return (person as Student).study !== undefined;
}

if (isStudent(person)) {
  person.study();
} else {
  person.login();
}