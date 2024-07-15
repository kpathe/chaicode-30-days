// Activity 1: Arithmetic Operations

// 1.
let a = 109;
let b = 78;
console.log(`${a} + ${b} = ${b + a}`)

// 2.
a = 10;
b = 7;
console.log(`${a} - ${b} = ${a - b}`)

// 3.
a = 39;
b = 58;
console.log(`${a} x ${b} = ${a * b}`)

// 4.
a = 376
b = 6
console.log(`${a} ÷ ${b} = ${(a / b).toFixed(2)}`)

// 5.
a = 1729
b = 84
console.log(`${a} % ${b} = ${a % b}`)



// Activity 2:Assignment Operators
// 6.
let number = 10;
console.log(`Before addition : ${number}`);
number += 200;
console.log(`After addition : ${number}`);

// 7.
number = 609;
console.log(`Before subtraction : ${number}`);
number -= 18;
console.log(`After subtraction : ${number}`);



// Activity 3: Comparison Operators
// 8.
console.log(`39>45 : ${39 > 45}`);
console.log(`39<45 : ${39 < 45}`);

// 9.
console.log(`9>=10 : ${9 > 10}`);
console.log(`100<=100 : ${100 <= 100}`);

// 10.
console.log(`7==7 : ${7 == 7}`)
console.log(`7==0 : ${7 == 0}`)
console.log(`20===20 : ${20 === 20}`)
console.log(`20===80 : ${20 === 80}`)



// Activity 4: Logical Operators
// 11.
let num1 = 90;
let num2 = 80;

if (num1 > 10 && num2 < 100) {
    console.log(true);
}

// 12.
if (num1 === 10 || num2 < 100) {
    console.log(true);
}

// 13.
if (num1 !== 9) {
    console.log(`num1 is not equal to 9`);
}


// Activity 5: Ternary Operator
// 14.
let num = -100;
let ternaryCheck = num > 0 ? true : false;
console.log(ternaryCheck)