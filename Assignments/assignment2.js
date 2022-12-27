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
