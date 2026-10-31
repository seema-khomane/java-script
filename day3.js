//## Question 1: Variable Declaration

//Declare three variables using `var`, `let`, and `const`, respectively.

//- Store your name in the first variable.
var str = "seema"
console.log(str);
//- Store your age in the second variable.
//let age = 27
//console.log(age);
//- Store your favourite number in the third variable.
//const int = 15
//console.log(int);
//- Try to reassign a new value to each variable and observe what happens.
var str = "neeta"
console.log(str);
let age = 23
console.log(age);
const int = 13
console.log(int);

//# Question 2: Re-declaration

//Write a program using `var` and `let`.

//- Declare a variable named `marks` using `var` and assign it `75`.
var marks = 75
console.log(marks);
//- Declare `marks` again using `var` and assign it `90`.
var marks = 90
console.log(marks);
//- Print the value of `marks`.
//- Now try declaring a variable named `score` twice using `let`. Observe the result.
//let score = 23
//let score = 24
//console.log(score);

//## Question 3: Variable Naming Rules

//Identify which variable names are valid and which are invalid in JavaScript. Write your answers in comments and explain why.


let studentName = "Amit";// This is using variable name because of they are starts with alphabets and using no gap between them.
console.log(studentName);
//let 2marks = 85; // This is not using variable because of start of digit
let _price = 100; // this is using variable name because they are start of underscore
//let $total = 500;// this is using variable name because of it starts with dollar.
//let user-age = 20; //This is not using for variable name because of dash is availabe in that.
//console.log(user-age);
//let const = 10;// This is not using for variable name because of two data types are using in that.
//console.log(const);


//## Question 4: Data Types

//Create one variable for each of the following data types and print each variable using `console.log()`.

- String
var str = "neha"
console.log(str);
- Number
var number = 45
console.log(number);
- Boolean
var boolean = true
console.log(boolean);
- Null
var Null = 9
console.log(Null);
- Undefined
var Undefined = 7
console.log(Undefined);
- BigInt
var Bigint = 38938288838n
console.log(Bigint);
- Symbol



//## Question 5: Equality and Symbol

//Predict the output of the following code before running it. Then execute the program and check your answers.


let a = 50;
let b = 50;
console.log(a);
console.log(b);

let id1 = Symbol(100);
let id2 = Symbol(100);

console.log(a == b);
console.log(id1 == id2);

let x = "JavaScript";
let y = "JavaScript";

console.log(x == y);
/*

/Explain why each comparison returns `true` or `false`.

Instructions for your friend

- Solve all 5 questions in JavaScript.
- Write and run your code in VS Code.
- Don't copy answers from the internet.
- Be ready to explain your code in the next class.*/

