// 1. Number Printing Script
// Using for loop
for (let i = 1; i <= 10; i++) {
    console.log(i)
}
console.log();

// Using while loop
let i = 1;
while (i <= 10) {
    console.log(i);
    i++
}
console.log();

// 2.Multiplication Table Script
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`)
}
console.log();



// 3.
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write("*"); //used this method after knowing it from the copilot to print the output in the same line
    }
    console.log()
}
console.log();

// 4.Sum Calculation Script
i = 1;
let sum = 0;
while (i <= 10) {
    sum = sum + i
    i++
}
console.log(sum);
console.log();

// 5. Factorial Calculation Script
let fact = 1
index = 1
let num = 6
do {
    fact = fact * index;
    index++;
} while (index <= num);
console.log(fact);
