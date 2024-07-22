// Activity 1: Object creation and access
// 1.
let book = {
    title: "Harry Potter and the Prisoner of Azkaban",
    author: "J.K Rowling",
    year: 1997
}

console.log(book);

// 2.
const title = book.title
const author = book.author

console.log(`
Title : ${title}
Author : ${author}
`);

// Activity 2: Object Methods

// 3.
book.info = ()=>{
    return `* ${book.title} ${book.author}` //Added asterisk so as to identify that it is the return value of a method
};
console.log(book.info());

// 4.
book.updateYear = (yearNew)=>{
    book.year = yearNew
}
book.updateYear(2020)
console.log(book,"\n");


// Activity 3:Nested Objects

// 5.
let library = {
    name : "Kaushlendra Pathe",
    books : ["Atomic Habits", "The monk who sold his Ferrari","Rich Dad Poor Dad"]
}

console.log(library,"\n");

// 6.
const naam = library.name
const titles = library.books

console.log(naam);
console.log(titles);

// Activity 4: The this Keyword

// 7.
book.pbn = function(){
    return `${this.title} : ${this.year}` 
};

console.log(book.pbn(),"\n");


// Activity 5: Object Iteration
for (const key in book) {
    console.log(`Key : ${key}
Value : ${book[key]}
`);
}

console.log(Object.keys(book));
console.log(Object.values(book));