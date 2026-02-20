
let userInput = prompt("Enter a number between 1 and 100:");

let number = parseInt(userInput);

if (number >= 1 && number <= 100 && !isNaN(number)) {
    console.log("Thank you! You entered " + number + ", a valid number.");
} else {
    console.log("Sorry, " + userInput + " is not a valid entry.");
}