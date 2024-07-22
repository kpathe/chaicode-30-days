// Activity 1: Selecting and Manipulating Elements

// 1.
let exId = document.getElementById("example-id")

exId.innerText = "Now, the text content is changed";

// 2.
let exClass = document.querySelector(".example-class")

exClass.style.backgroundColor = "orange";


// Activity 2: Creating and Appending Elements

// 3.
let text = document.createElement('div')

text.innerHTML = `<div class="newtext">
This is a new div. Created using createElement method.</div>`

let ul = document.getElementById("example-list")

document.body.insertBefore(text, ul);

let newListItem = document.createElement("li")

newListItem.innerText = "Hey there All ! I am a new list item."

ul.append(newListItem)


// Activity 3: Removing Elements

// 5.
let removeItem = document.getElementById("remove-me")

removeItem.remove()

// 6.
let remLastChild = document.getElementById("remove-child")

let lastChild = remLastChild.lastElementChild

remLastChild.removeChild(lastChild)

// Activity 4: Modifying Attributes and Classes

// 7.
let image = document.getElementById("example-img");
image.setAttribute("src", "example.jpg")

// 8.
let exDiv = document.getElementById("example-div")

exDiv.classList.add("high")
exDiv.classList.add("low")
exDiv.classList.add("helpful")
exDiv.classList.remove("low")


// Activity 5: Event Handling
let changePara = document.getElementById("click-me")

let para = document.getElementById("paragraph")

changePara.addEventListener("click", (event) => {
    console.log(event.target);

    para.innerText = "Ab main Bdal gya hun!!"
})

let boxP = document.getElementById("hover-me")



boxP.addEventListener("mouseover", function () {
    this.style.backgroundColor = "grey";
})

boxP.addEventListener("mouseout", function () {
    this.style.backgroundColor = "white";
})

