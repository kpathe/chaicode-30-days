// 1.Variables Types Console Log
const naam = "Ironman"
console.log(`Value: ${naam}, Type : ${typeof(naam)}`)

const age = 32
console.log(`Value: ${age}, Type : ${typeof(age)}`)

const married = true
console.log(`Value: ${married}, Type : ${typeof(married)}`)

const portfolio = {
    missions:10,
    ranking:25,
    motto:'I am Ironman',
    company:'Stark Industries'
}
console.log(`Variable: ${portfolio}, Type : ${typeof(portfolio)}`)

const movies = [3,'Ironman','Ironman 2','Ironman 3']
console.log(`Variable: ${movies}, Type : ${typeof(movies)}`)



// 2. Reassignment Demo
// Assignment using let
let grade = 'B+';
grade = "A+"; //no errors

// Assignment using const
const dateOfSub = '10th July 2024';
dateOfSub = '20th November 2024'; // Gives error > TypeError: Assignment to constant variable.