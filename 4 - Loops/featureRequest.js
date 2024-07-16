// 1. Number Printing Script
console.log(`Number Printing Script`);
console.log(`Using for loop`);
for (let i = 1; i <= 10; i++) {
    console.log(i)
}
console.log();

console.log(`Using while loop`);
let i = 1;
while (i <= 10) {
    console.log(i);
    i++
}
console.log();

// 2.Multiplication Table Script
console.log(`Multiplication Table Script`);
console.log(`Table of 5`);
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`)
}
console.log();



// 3. Pattern Printing Script
console.log(`Pattern Printing Script`);
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write("*"); //used this method after knowing it from the copilot to print the output in the same line
    }
    console.log()
}
console.log();

// 4.Sum Calculation Script
console.log(`Sum Calculation Script`)
i = 1;
let sum = 0;
while (i <= 10) {
    sum = sum + i
    i++
}
console.log(sum);
console.log();

// 5. Factorial Calculation Script
console.log(`Factorial Calculation Script`)
let fact = 1
index = 1
let num = 6
do {
    fact = fact * index;
    index++;
} while (index <= num);
console.log(fact);
