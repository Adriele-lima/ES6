/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

function addTwoNumbers(a,b) {
    //code block
    return a + b;
}

let sum = addTwoNumbers(3,5);
console.log(sum)

// Arrow Function With Parameters

const addTwoNumbers1 = (a,b) => {
    //code block
    return a + b;
}

let sum1 = addTwoNumbers1(8,8);
console.log(sum1)

// Single Line Arrow Function With Parameters
// Also valid (required with multiline returns)

const addTwoNumbers2 = (a,b) => a + b;
let sum2 = addTwoNumbers2(6,4);
console.log(sum2);

// Implicit Returns

const saySomething = message => console.log(message);
saySomething("Hello World!")

const sayHello = () => console.log("Hello");
sayHello();

// Returning Multiple Lines

const returnMultipleLines = () => (
    `<p>
        This is a multiple string!
    </p>`
)

console.log(returnMultipleLines())

//Exercise:

let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths','english', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon'},
        results: {science: 93, maths: 95, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 79, art: 95},
    }
];

const averagePoints = (arr, subject) => {
    let allPoints = 0;
    let sum = 0;
    for(let itm of arr) {
      if(subject in itm.results) {
        allPoints += itm.results[subject];
        sum+=1;
      }
    }
    return allPoints / sum;
};

let averageMarks = averagePoints(students, 'english');
console.log(averageMarks);