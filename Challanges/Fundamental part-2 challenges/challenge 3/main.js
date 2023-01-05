const mark = {
  firstName: "Mark",
  lastName: "Miller",
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    // console.log(this);
    this.bmi = this.mass / this.height ** 2;
    return this.mass / this.height ** 2;
  },
};
console.log(mark);
// to call bmi value, we first have to call function in which it reside
console.log(mark.calcBMI());
console.log(mark.bmi);

const john = {
  firstName: "John",
  lastName: "Smith",
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    // console.log(this);
    this.bmi = this.mass / this.height ** 2;
    return this.mass / this.height ** 2;
  },
};
console.log(john);
console.log(john.calcBMI());
console.log(john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi} is higher then ${john.fullName}'s BMI (${john.fullName})`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.fullName}) is higher then ${mark.fullName}'s BMI (${mark.bmi}`
  );
} else {
  console.log("Both are same!");
}
