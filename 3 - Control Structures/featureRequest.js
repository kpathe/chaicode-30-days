// 1.Number Check Script
let number = -10;
if (number > 0) {
    console.log("Positive")
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// 2. Voting Eligibility Script
let age = 19;
if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}


// 3.Day of the Week Script
let day = 60;
switch (day) {
    case 1:
        console.log("Monday") //assuming the day starts from Monday
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;

    default:
        console.log("Invalid input. Please enter a number between 1-7");
        break;
}


// 4.Grade Assignment Script
let score = 90;
switch (true) {
    case (score >= 90 && score <= 100):
        console.log("A")
        break;
    case (score >= 80 && score < 90):
        console.log("B")
        break;
    case (score >= 70 && score < 80):
        console.log("C")
        break;
    case (score >= 60 && score < 70):
        console.log("D")
        break;

    case (score > 0 && score < 60):
        console.log("F");
        break;

    default:
        console.log("Invalid Input")
        break;
}


// 5.Leap Year Check Script
let year = 8;
if (year % 4 === 0 && (year % 400 === 0 || year % 100 !== 0)) {
    console.log("Leap Year")
} else {
    console.log("Not a Leap Year");
}