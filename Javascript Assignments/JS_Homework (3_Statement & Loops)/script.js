// Variables Assignment
let firstName = "Kristina";
let lastName = "Tamayao-Calica";

const msg = `Hello, ${firstName} ${lastName}! How can we help you today?`

console.log(msg);

// Operators Assignment
const birth_year = 1991;
let current_year = new Date().getFullYear();

let age = current_year - birth_year;

console.log(`Patient's age: ${age}`);


// Statements and Loops Assignment
let birth_month = 8;
const current_month = new Date().getMonth();
current_year -= 1;

let accurate_age = current_year - birth_year; // I used a different variable, which is "accurate_age", since "age" has already been used using the let keyword

if(birth_month <= current_month){
    accurate_age++; 
}
console.log(`Patient's Accurate Age: ${accurate_age}`);