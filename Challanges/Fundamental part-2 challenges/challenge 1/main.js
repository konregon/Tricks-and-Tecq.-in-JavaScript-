const calAverage = (a, b, c) => (a + b + c) / 3;
console.log(calAverage(3, 45, 5));

//test 1
let scoreDolphins = calAverage(44, 23, 71);
let scoreKoalas = calAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins wins (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins");
  }
};
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(12, 23);
checkWinner(124, 23);

//test data 2
scoreDolphins = calAverage(85, 54, 41);
scoreKoalas = calAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
