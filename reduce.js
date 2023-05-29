// Summing an array of numbers:

/* let sum = nums.reduce((acc, curr) => {
    console.log(
        "Acumulator:", acc,
        "Current Value:", curr,
        "Total:", acc + curr
    );
    return acc + curr;
});
console.log(sum);*/

const nums = [0, 1, 2, 3, 4];

let sum2 = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum2);

const teamMembers = [
    {
        name: "Andrew",
        profession: "Developer",
        yrsExperience: 5,
    },
    {
        name: "Ariel",
        profession: "Developer",
        yrsExperience: 7,
    },
    {
        name: "Michael",
        profession: "Designer",
        yrsExperience: 1,
    },
    {
        name: "Kelly",
        profession: "Designer",
        yrsExperience: 3,
    }
];

// Totaling a specific object property

let totalExperience = teamMembers.reduce((acc,curr) => acc + curr.yrsExperience, 0); // Do not forget the initial value!
console.log(totalExperience);

// Grouping by a property, and totaling it too
// {Developer: 12, Designer: 4} <-- this is what we want!

let experienceByProfession = teamMembers.reduce((acc, curr) => {
    let key = curr.profession;
    if (!acc[key]) {
        acc[key] = curr.yrsExperience;
    } else {
        acc[key] += curr.yrsExperience;
    }
    return acc
}, {});

console.log(experienceByProfession);

// Exercise:

let students = [
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
        results: {science: 93, english: 73, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, english: 88, maths: 97, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

const biggest = students.reduce((acc, cur) => {
    acc = acc.max > cur.results.english ? acc: {name:cur.name, max:cur.results.english};
    return acc;
    }, {name: '', max: 0});
console.log(biggest);

/* Using destructuring 
const biggest = students.reduce(({max, name}, {name:n, results:{english}}) => {
    if(max < english) {
        acc = {name:n, max: english};
    }
    return acc;
    }, {name: '', max: 0});
    
console.log(biggest);
*/