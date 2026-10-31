//## Question 1: Template Literals

//Create three variables:

//- `name` — your name
//- `age` — your age
//- `course` — `"JavaScript"`

//Using a template literal (backticks), print this type of message by inserting the variable values:
//Hello, my name is Amit. I am 22 years old and I am learning JavaScript.`
 let name = "Hello, my name is Amit'"
 console.log(name.replace ("Amit","Seema"));
 let int = "I am 22 years old"
 console.log(int.replace("22","26"));
 let str = "I am learning JavaScript"
 console.log(str.replace("JavaScript", "javasript"));


//## Question 2: String Methods

//Consider this string:


let strs = " Welcome to JavaScript ";


//Use string methods to perform these tasks:

//1. Print the length of the string.
console.log(strs.length);
//2. Convert it to uppercase.
console.log(strs.toUpperCase());
//3. Convert it to lowercase.
console.log(str.toLowerCase());
//4. Check whether it includes `"JavaScript"`.
console.log(strs.includes("JavaScript"));
//5. Remove the extra spaces from the beginning and end.
console.log(strs.trim());
//6. Check whether the original string starts with `"Welcome"`.
console.log(strs.startsWith("Welcome"));
//Print the result of every operation.


//## Question 3: Slice, Substring, and Character Access

//Given the following string:


let language = "JavaScript";


//Write code to:

//1. Print the first four characters.
console.log(language.slice(0,4));
//2. Print the last three characters using a negative index with `slice()`.
console.log(language.slice(-3));
//3. Print the character at index `4` using `charAt()`.
console.log(language.charAt(4));
//4. Print the substring from index `0` to index `4` using `substring()`.
console.log(language.substring(0,4));
//5. Print the character at index `6` using bracket notation (`[]`).
console.log(language.split(6));


//## Question 4: Search and Replace

//Consider this string:


let sentence = "I love learning JavaScript";


//Use string methods to:

//1. Find the index of `"learning"`.
console.log(sentence.indexOf("learning"));//7
//2. Check whether the sentence includes `"Python"`
console.log(sentence.includes("python"));//false
//3. Check whether the sentence ends with `"JavaScript"`.
console.log(sentence.endsWith("JavaScript")); // true
//4. Replace `"JavaScript"` with `"React"`.
console.log(sentence.replace("JavaScript","React")); // I love learning React
//5. Repeat the original sentence two times.
console.log(sentence.repeat(" 2 ")); // I love learning JavaScript I love learning JavaScript

//Print all the results and check whether the original string changes after using `replace()`.


//## Question 5: Split and String Challenge

//You are given this variable:


let fullName = "Pragya Sharma Patil";


//Complete the following tasks:

//1. Split the full name into an array of words.
console.log(fullName.split()); // [ 'Pragya Sharma Patil' ] 
//2. Print only the first name.
console.log(fullName.slice(0,6)); // Pragya
//3. Print only the middle name.
console.log(fullName.slice(7,14)); // Sharma
//4. Print only the last name.
console.log(fullName.slice(14,19));
//5. Using a template literal, print a greeting such as `Hello, Pragya!`.
console.log('Hello, Pragya!');