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
*/
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

/*
------ Arrow function ------
*/
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
