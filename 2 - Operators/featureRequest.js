// 1. Arithmetic Operations Script
console.log("Arithmetic Operations Script")
let a = 10;
let b = 20;
console.log(`${a} + ${b} = ${b + a}`)


a = 50;
b = 34;
console.log(`${a} - ${b} = ${a - b}`)


a = 70;
b = 54;
console.log(`${a} x ${b} = ${a * b}`)


a = 376
b = 10
console.log(`${a} ÷ ${b} = ${(a / b).toFixed(2)}`)


a = 890
b = 10
console.log(`${a} % ${b} = ${a % b}`)

console.log()


// 2. Comparison and Logical Operators Script
console.log("Comparison and Logical Operators")

console.log(`39>45 : ${39 > 45}`);
console.log(`39<45 : ${39 < 45}`);


console.log(`9>=10 : ${9 > 10}`);
console.log(`100<=100 : ${100 <= 100}`);


console.log(`7==7 : ${7 == 7}`)
console.log(`7==0 : ${7 == 0}`)
console.log(`20===20 : ${20 === 20}`)
console.log(`20===80 : ${20 === 80}`)


let num1 = 90;
let num2 = 80;

if (num1 > 10 && num2 < 100) {
    console.log(true);
}


if (num1 === 10 || num2 < 100) {
    console.log(true);
}


if (num1 !== 9) {
    console.log(`num1 is not equal to 9`);
}
console.log();

// 3.Ternary Operator
console.log("Ternary Operator Script");
let num = -100;
let ternaryCheck = num > 0 ? true : false;
console.log(`num > 0 ? true : false
Result : ${ternaryCheck}`)