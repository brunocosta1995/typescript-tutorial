// let array1: string[] = ['bruno', 'costa', 'silva'];
// let arra2: number[] = [1,2,3];
// let array3: boolean[] = [true, false, true];

let array1: Array<string> = ["bruno", "bruno", "burno"];

function returnValue<T>(arg: T): T {
  return arg;
}

const stringValue = returnValue<string>("bruno");
const numberValue = returnValue<number>(99);

console.log(stringValue, numberValue, array1);

interface genericsValue<T> {
  name: T;
  func: () => T;
}

const newGenerics: genericsValue<string> = {
  name: "generics",
  func() {
    return "funcGenerics";
  },
};

console.log(newGenerics.name, newGenerics.func());

async function fetchData(): Promise<string> {
  return "Meus Dados";
}

console.log(fetchData());


function generateArrayString(length: number, value: string): string[] {
  let result: string[] = [];
  result = Array(length).fill(value);
  return result;
}

console.log(generateArrayString(5, 'ok'));

function createAnyArray<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  result = Array(length).fill(value);
  return result;
}

console.log(createAnyArray<string>(10, 'bruno'));
console.log(createAnyArray<number>(20, 54));


function pares<T, U>(param1: T, param2: U): [T, U] {
  return [param1, param2]
}

const result = pares<number, boolean>(1234, true);
// const result = pares(1234, true); 
console.log(result);



function restricao<T extends string>(value: T): T {
  return value;
}


type Car = {
  brand: string;
  model: string;
};

const car: Car = {
  brand: 'ford',
  model: 'mustang',
};

type Product = {
  name: string;
  price: number;
};

const product: Product = {
  name: 'shoes',
  price: 1.99,
};

type Student = {
  name: string;
  age: number;
};

const student: Student = {
  name: 'peter',
  age: 20,
};


function printName<T extends {name: string}>(input: T): void {
  // if ('name' in input) {
    console.log(input.name);
  // }
}

printName<Student>(student);
printName<Product>(product);
// printName<Car>(car);


interface dataStore<T> {
  data: T[]
}

const dataNumber: dataStore<number> = {
  data: [1,2,3,4,5]
}

console.log(dataNumber);

interface newData<T = any> {
  data: T[]
}

const randomData: newData = {
  data: ['bruno', 123, true]
}

console.log(randomData);
