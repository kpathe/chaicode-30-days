// 1. Even or Odd Function Script
function evenYOdd(number) {
    if (number % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd")
    }
}

evenYOdd(267);
evenYOdd(96);
console.log();

// 2.Square Calculation Function Script
function square(number) {
    return (Math.pow(number, 2))
}

console.log(`Square of 12 : ${square(12)}`);
console.log(`Square of 9 : ${square(9)}`);
console.log();

// 3. Concatenation Function Script
const conc = function (str1, str2) {
    let constr = str1.concat(str2);
    return constr;
}

console.log(conc("hello", " world"));
console.log(conc("namaste", " shrushti"));
console.log();

// 4. Sum Calculation Arrow Function Script
const sumtwo = (a, b) => {
    return (a + b);
}

console.log(sumtwo(89, 182));
console.log();

// 5.Higher-Order Function Script
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