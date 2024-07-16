// Activity 1: For Loop
// 1.
for (let i = 1; i <= 10; i++) {
    console.log(i)
}

// 2.
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`)
}

// Activity 2: While Loop
// 3.
let i = 1;
let sum = 0;
while (i <= 10) {
    sum = sum + i
    i++
}
console.log(sum);
console.log();

// 4.
let index = 10;
while (index > 0) {
    console.log(index);
    index--;
}
console.log("")

// Activity 3: Do...While Loop
// 5.
i = 1
do {
    console.log(i);
    i++
} while (i <= 5);

// 6.
let fact = 1
index = 1
let num = 6
do {
    fact = fact * index;
    index++;
} while (index <= num);
console.log(fact); //is bar kar liya maine factorial. nhi to 1st sem ke c ke practical mei bna hi nhi tha 
// 08:44 16/07/2024

// Activity 4: Nested Loops
// 7.
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write("*"); //used this method after knowing it from the copilot to print the output in the same line
    }
    console.log()
}
console.log();


// Activity 5: Loop Control Statements
// 8.
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i)
}
console.log();

// 9.
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i)
}