"use strict";

// function logger(name = "siva") {
//   console.log(`My name is ${name}`);
// }

// logger("Hariprasath");
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = fruitPeice(apples, oranges);
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// // const orangeJuice = fruitProcessor(0, 4);
// console.log(appleJuice);
// // console.log(orangeJuice);

// function fruitPeice(apple, orange) {
//   const peices = `Make the juice with ${apple * 4} apple peices and ${
//     orange * 4
//   } orange peices`;
//   return peices;
// }

// ********Function Declarations Vs Expressions********

// // Function Declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1995);
// console.log("age1", age1);

// // Function Expression

// const calcAge2 = function (birthYear) {
//   return 2040 - birthYear;
// };

// const age2 = calcAge2(1995);
// console.log("age2", age2);

// ********Arrow Function********

// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1995);
// console.log(age3);

// const yearUntilRetirement = (birthYear, firstName) => {
//   const age = calcAge3(birthYear);
//   const retirement = 65 - age;
//   return `${firstName} will retire in ${retirement} years`;
// };

// const retirementAge = yearUntilRetirement(1995, "hariprasath");
// console.log(retirementAge);

// ********Function Calling Other Functions********

// const cutFruitPieces = function (fruit) {
//   return fruit * 4;
// };

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// const orangeJuice = fruitProcessor(0, 2);

// console.log("apple:", appleJuice);
// console.log("orange:", orangeJuice);

// ********Reviewing Functions********

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirementAge = 65 - age;

  return retirementAge >= 0
    ? `${firstName} will got retire in ${retirementAge} years`
    : -1;
};

console.log(yearsUntilRetirement(1995, "hari"));
console.log(yearsUntilRetirement(1970, "hari"));
console.log(yearsUntilRetirement(2018, "Lishan"));
console.log(yearsUntilRetirement(1956, "arun"));
