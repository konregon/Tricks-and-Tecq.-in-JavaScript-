"use strict"; // this for strict mode

/*
------ Functions ------
*/
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
