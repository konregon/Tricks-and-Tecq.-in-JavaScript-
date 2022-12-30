"strict js";
// Functions
function describeCountry(country, population, capitalCity) {
  const line = `${country} has ${population} million people and its capital city is ${capitalCity}`;
  return line;
}

const india = describeCountry("India", 1200, "Delhi");
console.log(india);

const usa = describeCountry("USA", 331, "washington, D.C.");
console.log(usa);

const canada = describeCountry("Canada", 38, "Ottawa");
console.log(canada);

//Function Declarations vs. Expressions
//Declaration
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
const countryPopulationPercentage1 = percentageOfWorld1(1200);
console.log(
  `entered population is ${countryPopulationPercentage1} % of total world population.`
);
//Expression
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};
const countryPopulationPercentage2 = percentageOfWorld2(350);
console.log(
  `entered population is ${countryPopulationPercentage2} % of total world population.`
);

//Arrow Functions
const percentageOfWorld3 = (population) => (population / 7900) * 100;
const countryPopulationPercentage3 = percentageOfWorld3(440);
console.log(
  `entered population is ${countryPopulationPercentage3} % of total world population.`
);

//Function calling other function
function percentageOfWorld4(population) {
  return (population / 7900) * 100;
}
function describePopulation(country, population) {
  const percentage = percentageOfWorld4(population);
  const description = `${country} has ${population} million people,
  which is about ${percentage} % of the world.`;
  console.log(description);
}

describePopulation("India", 1200);
