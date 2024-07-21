// Activity 1: Array Creation and Access
// 1.
let numArr = [1, 2, 3, 4, 5];
console.log(`numArr is : `, numArr);

// 2.
console.log(`First and Last element of array : `, numArr[0], numArr[4]);


// Activity 2: Array methods (Basic)
// 3.
numArr.push(19);
console.log("After pushing an elment :", numArr);

// 4.
numArr.pop();
console.log("After popping element : ", numArr);

// 5.
numArr.shift(); // removes the first element from beginning
console.log("Use of shift() method : ", numArr);

// 6.
numArr.unshift(50); // adds new element to the beginning
console.log("Use of unshift() method : ", numArr);

// Activity 3:Array Methods (Intermediate)
// 7.
let doubleArr = numArr.map((item) => {
    return item * 2;
})
console.log("Use of map method : ", doubleArr);

// 8.
let evenArr = numArr.filter((item) => {
    if (item % 2 == 0) {
        return item;
    }
})
console.log("Use of filter method for even numbers : ", evenArr);

// 9.
let sumArr = numArr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0)

console.log("Use of reduce method to sum all elements : ", sumArr,"\n");

// Activity 4: Array Iteration
// 10.
console.log("Iteration via for loop");
for (let i = 0; i < numArr.length; i++) {
    console.log(numArr[i]); 
}
console.log();

// 11.
numArr.forEach( (item)=>{
    console.log(item);
})
console.log();


// Activity 5: Multi-dimensional Arrays
// 12.
let two_D_Array = [1,2,[3,4],[6,5],[9,0]];
console.log(two_D_Array,"\n");


// 13. Specific element
console.log(two_D_Array[3][1]);