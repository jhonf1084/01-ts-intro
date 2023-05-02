import { Product } from './06-funtion-destructuring';


export class Person {
    // public name: String;
    // public address: String;
    constructor(
        public firstName: String,
        public lastName: String,
        public address: String = 'No address'
    ) { }
}


// export class Hero extends Person {

//     constructor(
//         public alterEgo: String,
//         public age: number,
//         public realName: String,
//     ) {
//         super(realName, 'New York');
//     }
// }

export class Hero {

    // public person: Person;

    constructor(
        public alterEgo: String,
        public age: number,
        public realName: String,
        public person: Person,
    ) {
        // this.person = new Person(realName);
    }
}


const tony = new Person('Tony', 'Stark','New York');
const ironman = new Hero('Ironman', 45, 'Tony', tony);

console.log(ironman)


