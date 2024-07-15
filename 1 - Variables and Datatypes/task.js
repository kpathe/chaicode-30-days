// Activity 1: Variable Declaration

// 1.
var myNum = 108;
console.log(myNum);

// 2.
let newString = `Hello,World!`;
console.log(newString);


// Activity 2: Constant Declaration
// 3.
const myBool = true;
console.log(myBool);


// Activity 3: Data Types
// 4.
let prime = 2;
let term = `CODE`;
let stat = true;
let supercar = {
    name:`Lamborghini`,
    topspeed:330
}
let superheroes = ["Ironman","Batman","Spiderman","Superman","Hulk","Captain America"]


console.log(typeof(prime))
console.log(typeof(term))
console.log(typeof(stat))
console.log(typeof(supercar))
console.log(typeof(superheroes))


// Activity 4: Reassigning Variables
// 5.
let jobTitle = "Junior SDE";
console.log(`Before : ${jobTitle}`)
jobTitle = "Senior SDE"
console.log(`After : ${jobTitle}`)

// Activity 5: Understanding const
// 6.
const num = 7;
num = 9;  //Gives TypeError: Assignment to constant variable

