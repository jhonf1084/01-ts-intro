function addNumbers (a:number, b:number):number{
return a + b;
}

const addNumbersArrow = (a:number, b:number):String => {
    return `${a + b}`;
}

function multiply (firstNumber: number, secondNumber?:number, base:number = 2){
    return firstNumber * base;
}

// const result: number = addNumbers(1,2);
// const result2 : String = addNumbersArrow (1,2);
// const multipleyResult: number = multiply (5)

// console.log ({result, result2, multipleyResult})

interface Character {
    name: String;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) =>{
    character.hp += amount;
}

const jhon: Character = {
    name: 'jhon',
    hp: 50,
    showHp() {
        console.log (`Puntos de vida ${this.hp}`);
    }
}


healCharacter (jhon, 10);
healCharacter (jhon, 150);


jhon.showHp();


export {};