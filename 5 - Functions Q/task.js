// Activity 1: Function Declaration
// 1.
function evenOdd(number) {
    if (number % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd")
    }
}

evenOdd(267);
evenOdd(96);
console.log();

// 2.
function square(number) {
    return (Math.pow(number, 2))
}

console.log(`Square of 12 : ${square(12)}`);
console.log(`Square of 9 : ${square(9)}`);
console.log();


// Activity 2: Function Expression
// 3.
const max = function (a, b) {
    if (a >= b) {
        console.log(`${a} is greater`);
    } else console.log(`${b} is greater`);
}

max(10, 10);
console.log();


// 4.
const conc = function (str1, str2) {
    let constr = str1.concat(str2);
    return constr;
}

console.log(conc("hello", " world"));
console.log(conc("namaste", " shrushti"));
console.log();

// Activity 3: Arrow Functions
// 5.
const sumtwo = (a, b) => {
    return (a + b);
}

console.log(sumtwo(89, 182));
console.log();

// 6.
const contains = (str, char) => {
    if (str.includes(char)) {
        return true;
    } else {
        return false;
    }
}

console.log(contains("kaush", "t"));
console.log(contains("google", "o"));
console.log();


// Activity 4: Function Parameters and Default Values
// 7.
function product(a, b = 10) {
    return (a * b);
}

console.log(product(12, 14));
console.log(product(12));
console.log();

// 8.
function greeting(name, age = 20) {
    return (`Hello ${name}! You are ${age} years old.`)
}

console.log(greeting("Kaushlendra", 22));
console.log(greeting("CAT"));
console.log();

// Activity 5: Higher-Order Functions
// 9.
function higherOrderFunction(callback, number) {
    for (let i = 1; i <= number; i++) {
        callback(i);
    }
}

function mycallback(i) {
    console.log(i, "Callback function executed!")
}
higherOrderFunction(mycallback, 5);
console.log();


// 10.
function higherOrderSecond(callback1, callback2, value) {
    let arg = callback1(value);
    return callback2(arg);
}


function square(num) {
    console.log("First function executed with argument : ",num);
    return (num*num);
}

function divideByTwo(num) {
    console.log("Second function executed with argument : ",num);
    return (num / 2);
}

console.log(higherOrderSecond(square, divideByTwo, 8));
