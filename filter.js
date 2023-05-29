// Simple filtering

const people = [
    {
        name: 'Michael',
        age: 23,
    },
    {
        name: 'Lianne',
        age: 16,
    },
    {
        name: 'Paul',
        age: 18,
    },
];

const oldEnough = people.filter( person => person.age >= 21 );
console.log(oldEnough);

const paul = people.filter(person => person.name == 'Paul');
console.log(paul);

// Complex Filtering

const students = [
    {
        id: 1,
        name: 'Mark',
        profession: 'Developer',
        skills: [
            {name: 'javascript', yrsExperience: 1},
            {name: 'hmtl', yrsExperience: 5},
            {name: 'css', yrsExperience: 3},
        ],
    },
    {
        id: 2,
        name: 'Arial',
        profession: 'Developer',
        skills: [
            {name: 'javascript', yrsExperience: 0},
            {name: 'hmtl', yrsExperience: 4},
            {name: 'css', yrsExperience: 2},
        ],
    },
    {
        id: 3,
        name: 'Jason',
        profession: 'Designer',
        skills: [
            {name: 'javascript', yrsExperience: 1},
            {name: 'hmtl', yrsExperience: 1},
            {name: 'css', yrsExperience: 5},
        ],
    },
];

const has5yearsExp = skill => skill.yrsExperience >= 5;
const hasStrongSkills = student => student.skills.filter(has5yearsExp).length > 0;
const candidates = students.filter(hasStrongSkills);
console.log(candidates)
const names = candidates.map(candidate => candidate.name);
console.log(names)

//Exercise:

let students1 = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 84, maths: 97, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 67, english: 87, art: 95},
    }
];

const topMaths = students1.filter(itm => itm.results.maths >= 90);
console.log(topMaths);