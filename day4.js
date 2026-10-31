//## Question 1: Check the Data Type

//Write a JavaScript program using `typeof` to check the data type of each value below.


console.log(typeof "Hello");
console.log(typeof "seema");
console.log(typeof 100);
console.log(typeof 23);
console.log(typeof true);
console.log(typeof false);
console.log(typeof null);
console.log(typeof null);
console.log(typeof []);
console.log(typeof []);
console.log(typeof {});
console.log(typeof {});
console.log(typeof undefined);
console.log(typeof undefined);
console.log(typeof function() {});
console.log(typeof function() {});

//## Question 2: Explicit Type Conversion

//Create the following variables and convert them into the requested data types.

//- Convert `"150"` from a string to a number.
let age = "150"
let age1 = Number(age)
console.log(typeof age);
console.log(typeof age1);
//- Convert `250` from a number to a string.
let nums = 250
let nums1 = String(nums)
console.log(typeof nums);
console.log(typeof nums1);
//- Convert `"JavaScript"` into a boolean.
let num = "javascript"
let num1 = Boolean(num)
console.log(typeof num);
console.log(typeof num1);
//- Convert `0` into a boolean.
let n = 0
let n1 = Boolean(n)
console.log(n);
console.log(typeof (n));
console.log(typeof (n1));
//- Print each converted value and its data type using `console.log()` and `typeof`.

//## Question 3: Predict the Output

//Without running the code, predict the output of each statement. Then run the code and verify your answers.


console.log("10" + 5);//105
console.log("10" - 5);//5
console.log("4" * 3);//12
console.log("20" / 4);//5
console.log(true + 5);//6
console.log(false + 10);//10
console.log(null + 5);//5
console.log(undefined + 5);// NaN

//## Question 4: String and Empty Value Conversion

//Predict the output of the following statements and explain what happens in each case.


console.log("" + 10);//10
console.log("" - 10);-10
console.log("Hello" + 20);//Hello20
console.log("Hello" * 2);//NaN
console.log("5" + "10");//510
console.log("5" - "10");//-5
console.log([] + []);//empty
console.log([] * 5);//0

//## Question 5: Mixed Type Conversion Challenge

//Write a JavaScript program to predict and explain the output of all the following statements.


console.log(true + 1);//2
console.log(false * 10);//0
console.log(null + 10);//10
console.log(undefined * 2);//NaN
console.log("false" + 5);//false5
console.log("false" * 5);//NaN
console.log({} + []);// object object
console.log({} * []);//NaN


