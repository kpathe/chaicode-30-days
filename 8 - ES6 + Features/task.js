// Activity 1:Template Literals

// 1.
let name = "kaushlendra pathe";
let age = 22;
console.log(`Name: ${name}
Age : ${age} \n`
);

// 2.
const multi = `This is a multine line string.
Don't believe that it is.
Okay then tell me how there are 4 lines.
Here`

console.log(multi, '\n');

//Activity 2: Destructing

// 3.
let numbers = [1, 9, 3, 7, 5, 73, 2];

const [first, second] = numbers;

console.log(first);
console.log(second);

// Activity 3:Spread and Rest Operators
// 5.
let a = [1, 2, 3, 4]
let b = ["one", "two", "three"]

let c = ["Other", "Additional", "Elements", ...a, ...b]
console.log(c, "\n");

// 6.
let total = 0
function calculator(...num) {
    for (const item of num) {
        total += item
    }
    return total
}

console.log(calculator(10, 20, 47, 29));

// Activity 4: Default Parameters
// 7.
function product(a, b = 1) {
    return (a * b).toFixed(2);
}

console.log(product(14.32,9.798));
console.log(product(102));

// Activity 5: Enhanced Object literals

// 8.
let previous = "Hey Shona"
let playing = "Aashayein"
let next = "Dhoom Machale"

let control = function(command){
    switch (command) {
        case "previous":
            console.log(previous);
            break;
        case "play":
            console.log(playing);
            break;
        case "next":
            console.log(next);
            break;
    
        default:
            console.log("No command");
            break;
    }

    return command;
}

let player = {
    previous,
    playing,
    next,
    control
}

console.log(player.previous,"\n");
// console.log(player.playing);
// console.log(player.next);

console.log(player.control("previous"),"\n")
player.control("play");


// 9.
let changingProperty = "This is a text"
let compObj = {
    [changingProperty] : "Hello this property is changed"
}

console.log(compObj[changingProperty]);



