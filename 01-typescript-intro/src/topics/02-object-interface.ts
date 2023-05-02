const skills: String[] =['Bash', 'Counter', 'Healind']

interface Character {
    name: String;
    hp: number;
    skill: String[];
    hometown?: String;
}

const strider:Character={
    name: 'Strider',
    hp: 100,
    skill: ['Bash', 'Counter'],    
};

strider.hometown = 'Medellin';

console.table(strider)


export {};