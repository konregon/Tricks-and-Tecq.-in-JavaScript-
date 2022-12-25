// LECTURE: Values and Variables

let country = "India";

let continent = "Asia";

let population = "1.2 billion";

console.log(country);
console.log(continent);
console.log(population);

// Data Types
let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// let, const and var
language = "gujarati";

const state = "Gujarat";

// Basic Operators
let countryPopulation = 1200000000;
console.log(countryPopulation);
const halfOfCountyPopulation = countryPopulation / 2;
console.log(halfOfCountyPopulation);
console.log((countryPopulation = 1 + countryPopulation));

let finlandPopulation = 6000000;
console.log(countryPopulation > finlandPopulation);

let avgPopulation = 33000000;
console.log(countryPopulation < avgPopulation);

const someEuropCountry = "Portugal";

const description =
  "Portugal is in Europe, and its 11 million people speak portuguese";
console.log(description);

// Equality Operators: == vs. ===
/*
let numNeighbours = Number(
  prompt("How many neighbor countries does your country have?")
);
if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("more than 1 border!");
} else {
  console.log("No border");
}
*/

// Logical Operators

const countryIceland = false;

if (
  countryPopulation < 50000000 &&
  language === "English" &&
  (countryIceland = false)
) {
  console.log("perfect country to live in for Sarah");
} else {
  console.log("Nope! Find another country");
}

// switch statement
const worldLanguage = "hindi";

switch (worldLanguage) {
  case "chinese":
    console.log("MOST number of native speakers!");
    break;

  case "mandarin":
    console.log("MOST number of native speakers!");
    break;

  case "spanish":
    console.log("2nd place in number of native speakers");
    break;

  case "english":
    console.log("3rd place");
    break;

  case "hindi":
    console.log("4th place");
    break;

  case "arabic":
    console.log("5th most spoken language");
    break;

  default:
    console.log("Great language too :D");
    break;
}
