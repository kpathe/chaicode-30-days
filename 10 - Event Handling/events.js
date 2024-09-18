// Activity 1: Basic Event Handling
// 1.
let btn = document.getElementById("clickButton")

let para = document.getElementById("paragraph")

btn.addEventListener("click", function (event) {
    console.log(event.target);

    para.innerText = "Happy April Fool's Day. 😁😁"
})


// 2.
let imageDiv = document.getElementById("imgDiv")

let image = document.getElementById("image")

imageDiv.addEventListener("dblclick", function (e) {
    console.log(e.target);

    if (image.style.visibility === "visible") {
        image.style.visibility = "hidden";
    } else {
        image.style.visibility = "visible";
    }

    // if (image.style.visibility === "hidden") {
    //     image.style.visibility = "visible";
    // }

    console.log(image.style.visibility);

})



// Activity 2: Mouse Events
// 3.
let mouseBox = document.getElementById("mousebox")

mouseBox.addEventListener("mouseover", function (event) {
    // console.log(event.target)

    this.style.backgroundColor = "red"
})


// 4.
mouseBox.addEventListener("mouseout", function (event) {
    // console.log(event.target)

    this.style.backgroundColor = "blue"

    this.style.color = "white"
})


// 5.
let key = document.getElementById("keydownInput")

key.addEventListener("keydown", function (e) {
    console.log(e.key);
})


// 6.
let paraDisplay = document.getElementById("keyDisplay")

key.addEventListener("keyup", function (e) {
    // console.log("Key up hui abhi",e.key);

    paraDisplay.innerText = key.value;
})


// Activity 4: Form Events

// 7.
let myForm = document.getElementById("myForm")

let inputData = document.getElementById("name")

myForm.addEventListener("submit", function (event) {
    event.preventDefault()
    console.log(inputData.value);
})

let dropDown = document.getElementById("dropdown")

let ddPara = document.getElementById("selectedValue")

dropDown.addEventListener("change", function (e) {
    ddPara.textContent = dropDown.value
})


// Activity 5: Event Delegation

// 9.
document.getElementById("list").addEventListener("click", function (e) {
    if (e.target && e.target.nodeName == "LI") {
        console.log("Clicked item : ", e.target.textContent);
    }
})


// 10.
let parentEle = document.getElementById("parentElement")

parentEle.addEventListener("click", function (e) {
    if (e.target && e.target.matches('.dynamic-item')) {
        console.log("Dynamically added item clicked", event.target.textContent);
    }
})


const li = document.createElement('p')
li.className = "dynamic-item"
li.textContent = "Hi There"
parentEle.appendChild(li)