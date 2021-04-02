////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/
///////////////////////////////////


// Sarah's Code: /////////////////

//TEST ONE
let marksMass = 78;
let marksHeight = 1.69;

let johnsMass = 92;
let johnsHeight = 1.95;

let marksBMI = marksMass / marksHeight ** 2 / (marksHeight * marksHeight);
let johnsBMI = johnsMass / johnsHeight ** 2 / (johnsHeight * johnsHeight);

console.log("Mark's BMI is: " + marksBMI);
console.log("John's BMI is: " + johnsBMI);

let markHigherBMI = marksBMI > johnsBMI;
console.log("Does Mark have a higher BMI? " + markHigherBMI)

//TEST TWO
marksMass = 95;
marksHeight = 1.88;

johnsMass = 95;
johnsHeight = 1.76;

marksBMI = marksMass / marksHeight ** 2 / (marksHeight * marksHeight);
johnsBMI = johnsMass / johnsHeight ** 2 / (johnsHeight * johnsHeight);

console.log("Mark's BMI is: " + marksBMI);
console.log("John's BMI is: " + johnsBMI);

markHigherBMI = marksBMI > johnsBMI;
console.log("Does Mark have a higher BMI? " + markHigherBMI)