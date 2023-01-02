// test data 1
let markMass1 = 78;
let johnMass1 = 92;

const markHeight1 = 1.69;
const johnHeight1 = 1.92;

let markBmi1 = markMass1 / markHeight1 ** 2;
console.log(markBmi1);
let johnBmi1 = johnMass1 / johnHeight1 ** 2;
console.log(johnBmi1);

let markHigherBMI1 = markBmi1 > johnBmi1;
console.log(markHigherBMI1);

if (markBmi1 > johnBmi1) {
  console.log(`Mark's BMI(${markBmi1}) is higher than John's(${johnBmi1})!`);
} else {
  console.log(`John's(${johnBmi1}) BMI is higher than Mark's(${markBmi1})`);
}

// test data 2
let markMass2 = 95;
let johnMass2 = 85;

const markHeight2 = 1.88;
const johnHeight2 = 1.76;

let markBmi2 = markMass2 / markHeight2 ** 2;
console.log(markBmi2);
let johnBmi2 = johnMass2 / johnHeight2 ** 2;
console.log(johnBmi2);

let markHigherBMI2 = markBmi2 > johnBmi2;
console.log(markHigherBMI2);

if (markBmi2 > johnBmi2) {
  console.log(`Mark's(${markBmi2}) BMI is higher than John's(${johnBmi2})!`);
} else {
  console.log(`John's(${johnBmi2}) BMI is higher than Mark's(${markBmi2})`);
}
