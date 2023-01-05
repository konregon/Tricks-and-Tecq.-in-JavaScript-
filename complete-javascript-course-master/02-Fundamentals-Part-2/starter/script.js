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
*/

/*
--------Basic Array Operations (Methods)------
const friends = ["Maulik", "Manoj", "Vishal"];
console.log(friends);

const newFriends = friends.push("Hardik"); // push function = add new element to array
console.log(newFriends);

friends.unshift("John");
console.log(friends);

//remove element
friends.pop(); // Last element will be deleted
console.log(friends);

friends.shift(); // first element will be deleted
console.log(friends);

//index
console.log(friends.indexOf("Maulik"));
console.log(friends.indexOf("Manoj"));
console.log(friends.indexOf("Sita")); // if elements is not in array

//include check if asked element is in the array or not
console.log(friends.includes("Steven"));
console.log(friends.includes("Vishal"));

if (friends.includes("Maulik")) {
  console.log("You have a friends called Maulik");
}
*/

/*
-------Introduction to Objects-----
const maulikArray = [
  "Maulik",
  "Indian",
  2023 - 1996,
  "Programer",
  ["Vishal", "Manoj", "Hardik"],
];
console.log(maulikArray);

const maulik = {
  firstName: "Maulik",
  nationality: "Indian",
  age: 2023 - 1996,
  job: "programmer",
  friends: ["Kevin", "Elon", "Saradar Patel", "Swami"],
};
console.log(maulik);
*/

/*
------ Dot vs. Bracket Notation -------
const maulik = {
  firstName: "Maulik",
  lastName: "Patel",
  nationality: "Indian",
  age: 2023 - 1996,
  job: "programmer",
  friends: ["Kevin", "Elon", "Saradar Patel", "Swami"],
};
console.log(maulik);

// Dot notation
console.log(maulik.nationality);

// Bracket notation
console.log(maulik["nationality"]);

const nameKey = "Name";
console.log(maulik["first" + nameKey]);
console.log(maulik["last" + nameKey]);
console.log(maulik["last " + nameKey]); // with space key has become undefine

const interestedIn = prompt(
  "What do you want to know about Maulik? Choose between firstName, lastName, nationality, age, job, and friends"
);
// console.log(maulik[interestedIn]);

if (maulik[interestedIn]) {
  console.log(maulik[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, nationality, age, job, and friends"
  );
}

// adding new values to our object
maulik.location = "India";
maulik["twitter"] = "@maulikPatel";
console.log(maulik);

// challenge
// "Maulik has 4 friends and his best friend is called Swami"
console.log(
  `${maulik.firstName} has ${maulik.friends.length} friends, and his best friend is called ${maulik.friends[3]}`
);
*/

/*
-------- Function Method --------
const maulik = {
  firstName: "Maulik",
  lastName: "Patel",
  nationality: "Indian",
  // age: 2023 - 1996,
  birthYear: 1996,
  job: "programmer",
  friends: ["Kevin", "Elon", "Saradar Patel", "Swami"],
  hasDrivingLicense: true,

  // calAge: function (birthYear) {
  //   return 2023 - birthYear;
  // },

  // We are using this key word
  // calAge: function () {
  //   console.log(this);
  //   return 2023 - this.birthYear;
  // },

  calAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calAge()}-year old ${
      this.job
    }, and he has ${this.hasDrivingLicense ? "a" : "no"} driver's license.`;
  },
};
console.log(maulik);

// console.log(maulik.calAge(1996));
// console.log(maulik["calAge"](1996));

console.log(maulik.calAge());
console.log(maulik.calAge());

console.log(maulik.age);
console.log(maulik.age);
console.log(maulik.age);

// challenge
// "Maulik is 23-year old programer, and he has a/no driver's license"
console.log(maulik.getSummary());
*/

/*
-------- Iteration : for loop -----------
// console.log("Lifting weight repetition 1");
// console.log("Lifting weight repetition 2");
// console.log("Lifting weight repetition 3");
// console.log("Lifting weight repetition 4");
// console.log("Lifting weight repetition 5");
// console.log("Lifting weight repetition 6");
// console.log("Lifting weight repetition 7");
// console.log("Lifting weight repetition 8");
// console.log("Lifting weight repetition 9");
// console.log("Lifting weight repetition 10");
// console.log("Lifting weight repetition 11");
// console.log("Lifting weight repetition 12");

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 12; rep++) {
  console.log(`Lifting weight repetition ${rep}`);
}
*/

/*
--------- Looping Arrays, Breaking and Continuing --------
*/
const maulikArray = [
  "Maulik",
  "Indian",
  2023 - 1996,
  "Programer",
  ["Vishal", "Manoj", "Hardik"],
  true,
];

const types = [];

// we have to repeat the code
console.log(maulikArray[0]);
console.log(maulikArray[1]);
console.log(maulikArray[2]);

// using for loop
for (let i = 0; i < maulikArray.length; i++) {
  console.log(maulikArray[i], typeof maulikArray[i]);

  // filling types array
  // types[i] = typeof maulikArray[i];
  types.push(typeof maulikArray[i]);
}

console.log(types);

const years = [1991, 1992, 1995, 1996, 1998];
console.log(years);
