"use strict"; // this for strict mode

/*
------ Functions ------

function logger() {
  console.log("my name is Maulik Patel");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  // two parameters
  //   console.log(apples, oranges);
  const juice = `juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0); // store the value of function in any variable
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(3, 3);
console.log(appleOrangeJuice);
*/
/*
------- Function Declaration vs. Expressions -----

//Functions are just a VALUE
//function declaration
function calAge1(birthYear) {
  // const age = 2023 - birthYear;
  // return age; // or simply use return
  return 2023 - birthYear;
}
const age1 = calAge1(1996);
console.log(age1);

//function expression
const calAge2 = function (birthYear) {
  return 2023 - birthYear;
};
const age2 = calAge2(1998);
console.log(age2);
*/
/*
------ Arrow function ------

const calAge3 = (birthYear) => 2023 - birthYear;
const age3 = calAge3(1995);
console.log(age3);

const yearsLeftUntilRetire = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsLeftUntilRetire(1996, "Maulik"));
*/

/*
---------- Function calling other function ------

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 2));
*/

/*
---------- Reviewing Functions -----------
const calAge = function (birthYear) {
  return 2023 - birthYear;
};

const yearsLeftUntilRetire = function (birthYear, firstName) {
  const age = calAge(birthYear);
  const retirement = 65 - age;
  // return `${firstName} retires in ${retirement} years`;
  return retirement;
};

yearsLeftUntilRetire(1996, "Maulik");
console.log(yearsLeftUntilRetire(1998, "Akshay"));
*/

/*
-------Introduction to Arrays------
*/
const friend1 = "Maulik";
const friend2 = "Manoj";
const friend3 = "Vishal";

const friends = ["Maulik", "Manoj", "Vishal"];
console.log(friends);

const y = new Array(1995, 1996, 1998, 2001);
console.log(y);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends[0], y[1]);

console.log(friends.length);
console.log(y.length);
console.log(friends[friends.length - 1]); // getting last element

friends[2] = "Hardik";
console.log(friends);
// friends = ["Bob", "Alic"]; // can not change whole array

const firstName = "Maulik";
const Maulik = ["Maulik", "Patel", 2023 - 1996, "programer", friends];
console.log(Maulik);
console.log(Maulik.length);

// Exercise
const calAge = function (birthYear) {
  return 2023 - birthYear;
};
const years = [1995, 1996, 1998, 2001];

console.log(calAge(years));

const age1 = calAge(years[0]);
const age2 = calAge(years[1]);
const age3 = calAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calAge(years[0]),
  calAge(years[1]),
  calAge(years[years.length - 1]),
];
console.log(ages);
