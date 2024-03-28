////  FUNCTION IN TYPESCRIPT  ////
// write a function //
function carName() {
    console.log("toyota");
}
// call a function //
carName();
function myName(firstName, lastName) {
    console.log(firstName, lastName);
}
myName("Ghulam", "Mustafa");
// types assign to function //
function StudentData(name, rollNo, isPassed) {
    console.log(name, rollNo, isPassed);
}
StudentData("Ahmed", 200052, true);
function logFruitName() {
    var fruitName = "apple";
    console.log(fruitName);
}
logFruitName();
// example //
function biryaniRecipe(rice, beef, oil, salt) {
    if (rice === void 0) { rice = 5; }
    if (beef === void 0) { beef = 2; }
    if (oil === void 0) { oil = 2; }
    if (salt === void 0) { salt = 1; }
    var cookedBiryani = rice + beef + oil + salt + 2;
    return cookedBiryani;
}
console.log(biryaniRecipe(5, 5, 1));
// middle parameter ki value kw change kskte hen dusri value kw change kie bagair //
console.log(biryaniRecipe(undefined, 10, undefined, undefined));
