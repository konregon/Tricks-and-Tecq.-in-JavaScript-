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
*/
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
