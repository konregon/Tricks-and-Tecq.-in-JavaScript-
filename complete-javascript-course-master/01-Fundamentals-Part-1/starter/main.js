/*
------------Values and Variables-------------

let js = "amezing";

console.log(40 + 47 + 12 - 45);

// Variable name conventions
console.log("maulik");
console.log("akshay");
console.log("45");
console.log(45);
console.log("45mow");

let firstName = "Maulik";
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);

let myFirstJob = "program";
let myCurrentJob = "web developer";

console.log(myFirstJob);
console.log(myCurrentJob);

*/

/*
------ Data Type-----------


console.log(true);

let jsIsFun = true;
console.log(jsIsFun);

console.log(typeof true);
console.log(typeof jsIsFun);
console.log(typeof 23);
console.log(typeof 23.5454);
console.log(typeof "Maulik");

jsIsFun = "yes";
console.log(typeof jsIsFun);

let year;
console.log(year);
console.log(typeof year);
year = 1996;
console.log(year);
console.log(typeof year);

*/

/*
-----------let, const and var -----------

let age = 27;
age = 26;

const birthYear = 1996;
// birthYear = 1998;
// const myAge;

var job = "programmer";
job = "rider";

lastName = "Patel";
console.log(typeof lastName);

*/

/*
------------Basic Operators----------


const currentYear = 2022;

const ageMaulik = currentYear - 1996;
console.log(ageMaulik);

const ageSweta = currentYear - 1995;
console.log(ageSweta);

console.log(ageMaulik, ageSweta);

const firstName = "Maulik";
const lastName = "Patel";
console.log(firstName + lastName);
console.log(firstName + " " + lastName);

let x = 5 + 10; // x = 15
x += 15; // x = 30
console.log(x);
*/

/*
----------Strings and Template Literals-----------

const firstName = "Maulik";
const job = "web developer";
const birthYear = 1996;
const currentYear = 2022;

const Maulik =
  "I'm " +
  firstName +
  ", a " +
  (currentYear - birthYear) +
  " year old " +
  job +
  "!";
console.log(Maulik);

const maulikNew = `I'm ${firstName}, a ${
  currentYear - birthYear
} year old ${job}`;
console.log(maulikNew);
console.log(`just regular string!`);

console.log("string with \n new line \n more line");

console.log(`string
multiple
line`);
*/

/*
---------Taking Decisions: if / else Statements-------

const age = 12;
// const isOldEnough = age >= 18;

if (age >= 18) {
  console.log("person can get driving license");
} else {
  console.log("person can not get driving license");
  const yearsLeft = 18 - age;
  console.log(
    `Because person is too young, wait for another ${yearsLeft} years :)`
  );
}

const birthYear = 1996;
let century;
if (birthYear <= 2000) {
  let century = 20;
} else {
  let century = 21;
}
console.log(century);
*/

/*
----------Type Conversion and Coercion------

// type conversion = manually changing type of any variable
const inputYear = "1996";
console.log(typeof inputYear);
console.log(inputYear + 18); // taking both as string
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18); //converting string into Number formate
console.log(typeof inputYear);

console.log(Number("Maulik")); //NaN = Not a Number
console.log(typeof NaN); // type of NaN is number

console.log(typeof 23);
console.log(typeof String(23)); // converting number into String

//  type coercion
console.log("I am " + 23 + " year old."); // automatically change the variable type.
console.log("23" - "10" - 5); //JS converted the string into Number (when using "-"(minus))
console.log("23" + "10" + 5); // when using (+), it js convert it into string

// gauss the number
let n = "1" + 1;
console.log(n);
console.log(typeof n); // (+) so converted to string
n = n - 1;
console.log(n);
console.log(typeof n); // (-) so converted to number
console.log("123" < 57);

console.log(1 + 2 + 3 + "4" + "5" + 6 + 7 - "8" - 9); // it's changing the type of variable from left to right
*/

/* 
--------- truthy and Falsy value -------
// there are 5 falsy values : 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(undefined));
console.log(Boolean("Maulik"));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(String(NaN)));

const money = 0; // this tell if that it is 'falsy' value
// const money = 550; // this tell if that it is 'truly' value
if (money) {
  console.log("don't spend it all");
} else {
  console.log("You should get a job!");
}

let height = 10;
if (height) {
  console.log("Yay! height is defined.");
} else {
  console.log("Height is not defined.");
}
*/

/*
------- Equality Operators: == vs. === --------
const age = 18;
if (age === 18) {
  // strict equality operators (no type change)
  console.log("person become adult just this year!");
}

console.log(18 == 18);
console.log(18 == "18"); // lose equality operators where it will change type of variables
console.log(18 === "18"); // always use strict equality operators, to avoid future bugs

// prompt("what's your favorite number5");
const favorite = Number(prompt("what's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 55) {
  console.log("Cool! 55 is the number");
} else if (favorite === 23) {
  console.log("Cool! 23 is the number");
} else {
  console.log("your number is not in database5");
}

if (favorite !== 55) {
  console.log("why not 55");
}
*/

/*
-------- Boolean Logic --------
-------- Logical Operators --------
const hasDrivingLic = true; // A
const hasGoodEyeSight = true; //B

console.log(hasDrivingLic && hasGoodEyeSight);
console.log(hasDrivingLic || hasGoodEyeSight);
console.log(!hasDrivingLic);

// const shouldDrive = hasDrivingLic && hasGoodEyeSight;
if (hasDrivingLic && hasGoodEyeSight) {
  console.log("person can drive !");
} else {
  console.log("person should NOT drive");
}

const isTired = false; // C
console.log(hasDrivingLic || hasGoodEyeSight || isTired);
console.log(hasDrivingLic && hasGoodEyeSight && isTired);

if (hasDrivingLic && hasGoodEyeSight && !isTired) {
  console.log("person can drive !");
} else {
  console.log("person should NOT drive");
}
*/
