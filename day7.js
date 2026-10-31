//Question 1: Number Methods

//Create the following variable:


let price = 459.6789;


//Perform these tasks:

//1. Print the price with 2 decimal places using `toFixed()`.
console.log(price.toFixed(2)); // 459.68
//2. Check whether the price is an integer using `Number.isInteger()`.
console.log(Number.isInteger("price")); // false
//3. Convert `"250"` into a number using `Number()`.
console.log(Number("250")); // 250
//4. Convert `"Hello123"` into a number and check the result.
console.log(Number("Hello123")); //NaN
//5. Check whether `"JavaScript"` is NaN using `isNaN()`.
console.log(isNaN("JavaScript")); // true

//Question 2: parseInt and parseFloat

//Given the following values:


let a = "123.456";
let b = "89.75";
let c = 45.987;


//Predict and print the output of:

//1. `parseInt(a)`
console.log(parseInt(a)); // 123 In parseInt method have only integer numbers given.
//2. `parseFloat(a)`
console.log(parseFloat(a)); // 123.456 In parsInt method have floating point numbers are given.
//3. `parseInt(b)`
console.log(parseInt(b)); // 89
//4. `parseFloat(b)`
console.log(parseFloat(b)); // 89.75
//5. `Number(c)`
console.log(Number(c)); // 45.987
//6. `c.toFixed(2)`
console.log(c.toFixed(2)); // 45.99

//Also explain the difference between `parseInt()` and `parseFloat()`.


//Question 3: Math Methods

//Write a JavaScript program using the following numbers:


let num1 = 25.7;
let num2 = -49;
let num3 = 16;


//Perform these operations:

//1. Round `num1` using `Math.round()`.
console.log(Math.round("25.7")); // 26
//2. Round `num1` upward using `Math.ceil()`.
console.log(Math.ceil(25.7)); // 26
//3. Round `num1` downward using `Math.floor()`.
console.log(Math.floor(25.7)); // 25
//4. Find the square root of `num3`.
console.log(Math.sqrt(-49)); // NaN
//5. Find the absolute value of `num2`.
console.log(Math.abs(-49)); // 49
//6. Calculate `5` raised to the power of `3` using `Math.pow()`.
console.log(Math.pow(5,3)); //125

//Question 4: Min, Max and Random Numbers

//Complete the following tasks:

//1. Find the smallest number from `45, 12, 89, 3, 67` using `Math.min()`.
console.log(Math.min(45, 12, 89, 3, 67)); // 3
//2. Find the largest number from the same values using `Math.max()`.
console.log(Math.max(45, 12, 89, 3, 67)); // 89
//3. Generate a random number between `1` and `10`.
console.log(Math.floor(Math.random()*10)+1); // 7
//4. Generate a random number between `50` and `100`.
console.log(Math.floor(Math.random()*51)+50); // 65
//5. Generate a random integer between `1` and `31`.
console.log(Math.floor(Math.random()*31)+1); // 24

//Condition: Random numbers must be integers, not decimal values.


//Question 5: Math Challenge

//Create a program to perform the following tasks:

//1. Store your circle's radius in a variable.
let radius = 5
//2. Calculate the area of the circle using `Math.PI`.
let area = Math.PI*Math.pow(radius, 2)
console.log(area);// 78.5398
//3. Display the area rounded to 2 decimal places using `toFixed()`.
console.log(area.toFixed(2));
//4. Calculate the square of the radius using `Math.pow()`.
console.log(Math.pow(5,2));
//5. Print the value of `Math.E` using `console.log()`.
console.log(Math.E);

//Formula:

//\\[ Area = \pi \times radius^2 \\]


