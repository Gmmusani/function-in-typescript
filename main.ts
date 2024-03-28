////  FUNCTION IN TYPESCRIPT  ////

// write a function //

function carName() {
    console.log("toyota")
}

// call a function //

carName()

function myName(firstName, lastName) {
    console.log(firstName, lastName);
}
myName("Ghulam", "Mustafa");

// types assign to function //

function StudentData(name : string, rollNo : number, isPassed : boolean) {
    console.log(name, rollNo, isPassed);
}
StudentData("Ahmed", 200052, true)

function logFruitName() {
    let fruitName = "apple";
    console.log(fruitName);
}
logFruitName()

// example //

function biryaniRecipe(rice = 5, beef = 2, oil = 2, salt = 1){
    let cookedBiryani = rice + beef + oil + salt + 2
    return cookedBiryani
}
console.log(biryaniRecipe(5, 5, 1));

// middle parameter ki value kw change kskte hen dusri value kw change kie bagair //

console.log(biryaniRecipe(undefined,10,undefined,undefined));