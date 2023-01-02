let Dolphins;
let Koalas;

//Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
//Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
const DolphinsScore1 = 97;
const DolphinsScore2 = 112;
const DolphinsScore3 = 11;
console.log(DolphinsScore1, DolphinsScore2, DolphinsScore3);

const KoalasScore1 = 11;
const KoalasScore2 = 95;
const KoalasScore3 = 106;
console.log(KoalasScore1, KoalasScore2, KoalasScore3);

const DolphinsAvg = (DolphinsScore1 + DolphinsScore2 + DolphinsScore3) / 3;
const KoalasAvg = (KoalasScore1 + KoalasScore2 + KoalasScore3) / 3;

console.log(DolphinsAvg, KoalasAvg);
/*
if (DolphinsAvg > KoalasAvg) {
  if (DolphinsAvg >= 100) {
    console.log("Team Dolphin wins!");
  }
} else if (DolphinsAvg === KoalasAvg) {
  if (DolphinsAvg >= 100 && KoalasAvg >= 100) {
    console.log("This was Draw");
  }
} else if (KoalasAvg > DolphinsAvg) {
  if (KoalasAvg >= 100) {
    console.log("Team Koalas wins!");
  }
} else {
  console.log("team has score lower than 100!");
}
*/
if (DolphinsAvg > KoalasAvg && DolphinsAvg >= 100) {
  console.log("team Dolphin wins!");
} else if (KoalasAvg > DolphinsAvg && KoalasAvg >= 100) {
  console.log("team Koalas wins!");
} else if (
  DolphinsAvg === KoalasAvg &&
  DolphinsAvg >= 100 &&
  KoalasAvg >= 100
) {
  console.log("there was a draw!");
} else {
  console.log("No team has score of higher than 100");
}
