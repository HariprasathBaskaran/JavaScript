// console.log(48 + 90 - 1 + 10);
// let js = "amazing";
// if (js === "amazing") alert("Javascript is Fun!");
// js = "boring";
// if (js === "amazing") console.log("Javascript is Fun!");

// true;
// console.log(true);
// console.log(typeof true);

// **********Type Conversion and Coercion**********

// const inputYear = "1991";
// console.log(typeof inputYear);
// console.log(inputYear + 18);
// console.log(Number(inputYear) + 18);

// // type Coercion

// console.log("I am " + 23 + " Years old");
// console.log("23" - "10" - 3);
// console.log("23" + "10" + 3);

// console.log(2 + 5 + 4 + "2");

// 5 falsy values: 0, "", undefined, null, NaN

// console.log(0);
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("jonas"));
// console.log(Boolean(23));
// console.log(Boolean(""));

// const money = 0;

// if (money) {
//   console.log("dont spend it all:)");
// } else {
//   console.log("You should get a job");
// }

// const favNum = Number(prompt("What your favourite Number?"));
// console.log(favNum);
// console.log(typeof favNum);

// if (favNum == 23) console.log("cool! 23 is an amazing number");

// **********Switch Statement**********

// const day = "wednesday";

// switch (day) {
//   case "monday":
//     console.log("week first day. Need to plan for the week");
//     break;
//   case "tuesday":
//     console.log("make the design file");
//     break;
//   case "wednesday":
//     console.log("work for the design system");
//     break;
//   case "thursday":
//     console.log("review the design system");
//     break;
//   case "friday":
//     console.log("submit the design system to the team");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend");
//     break;
//   default:
//     console.log("Please enter the valid day");
// }

// console.log("##########If-else Statement##########");

// if (day === "monday") {
//   console.log("week first day. Need to plan for the week");
// } else if (day === "tuesday") {
//   console.log("make the design file");
// } else if (day === "wednesday") {
//   console.log("work for the design system");
// } else if (day === "thursday") {
//   console.log("review the design system");
// } else if (day === "friday") {
//   console.log("submit the design system to the team");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Enjoy the weekend");
// } else {
//   console.log("Enter the Valid day!");
// }

// **********Conditional(Ternary) Operator**********

const age = 23;

age >= 18
  ? console.log("I like to drink wine🍷")
  : console.log("I like to drink water💧");
