// type Employee = {
//   id: number;
//   name: string;
//   department: string;
// };

// type Manager = {
//   id: number;
//   name: string;
//   employees: Employee[];
// };

// type Staff = Employee | Manager;

// function printStaffDetails(input: Staff) {
//   if ("employees" in input) {
//     console.log(`This is a manager with: ${input.employees.length} employees`);
//   } else {
//     console.log(
//       `This is a employee working in the: ${input.department} department`
//     );
//   }
// }

// const steve: Employee = {
//   id: 1,
//   name: "steve",
//   department: "finances",
// };

// const alice: Employee = {
//   id: 1,
//   name: "alice",
//   department: "HR",
// };

// const bob: Manager = {
//   id: 1,
//   name: "bob",
//   employees: [alice, steve],
// };

// printStaffDetails(bob);

// interface Computer {
//     readonly id: number;
//     brand: string;
//     ram: number;
//     storage?: number;
//     upgradeRam(newRam: number): number
// }

// const myComputer: Computer = {
//     id: 1,
//     brand: 'dell',
//     ram: 8,
//     upgradeRam(newRam: number) {
//         return this.ram + newRam;
//     }
// }

// console.log(myComputer.brand, `A ram atual é: ${myComputer.ram}GB`, `a nova ram é de ${myComputer
//     .upgradeRam(4)}GB`
// );

/*
interface Person {
    name: string;
    getData(): string
}


interface Person {
    age: number
}


const person: Person = {
    name: 'bruno',
    age: 28,
    getData() {
        return `My name is ${this.name} and i have ${this.age} years`
    }
}

console.log(person.getData());

interface Employee extends Person {
    employeeId: number
}

const employee: Employee = {
    name: 'jane',
    age: 24,
    employeeId: 5,
    getData() {
        return `I'm employee with the id of ${this.employeeId} and my name is ${this.name} and i have ${this.age} years`
    },
}

console.log(employee.getData());


interface Manager extends Person, DogOwner {
    managerFunc(): void
}

interface DogOwner {
    dogName: 'thor';
    getDog(): string
}

const manager: Manager = {
    name: 'bob',
    age: 44,
    getData() {
        return `I'm manager and my name is ${this.name} and i have ${this.age} years`
    },
    managerFunc: function() {
        console.log(`i am the manager and my dog is called: ${this.dogName}`);
        
    },
    dogName: 'thor',
    getDog() {
        return this.dogName;
    },
}

manager.managerFunc();

console.log(manager.getData());

*/

interface Person {
  name: string;
}

interface DogOwner extends Person {
  dogName: string;
}

interface Manager extends Person {
  managePeople(): void;
  delegateTasks(): void;
}

function getEmployee(): Person | DogOwner | Manager {
  let generateNumber = Math.random();
  if (generateNumber < 0.33) {
    return { name: "bob" }; //Person
  } else if (generateNumber < 0.66) {
    return { name: "bob", dogName: "thor" }; //DogOwner
  } else {
    return {
      name: "bob",
      managePeople() {
        console.log("iam the manager");
      },
      delegateTasks() {
        console.log("task delegated");
      },
    }; //Manager
  }
}

const employee: Person | DogOwner | Manager = getEmployee();

console.log(employee);

function isManager(obj: Person | DogOwner | Manager): obj is Manager {
    return 'managePeople' in obj;
}

isManager(employee);

if (isManager(employee)) {
    employee.delegateTasks();
}
