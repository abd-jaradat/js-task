// Ask the user to enter their name as input. Keep asking until a valid name is provided.
function getUserName() {
    let name;
    do {
        name = prompt("Please enter your name:");
    } while (!name);
    return name;
}

// Ask the user to enter their gender as input. The answer should be either "male" or "female".
function getUserGender() {
    let gender;
    do {
        gender = prompt("Please enter your gender (male or female):").toLowerCase();
    } while (gender !== "male" && gender !== "female");
    return gender;
}

// Ask the user to enter their age as input and alert the user if the age is less than or equal to zero.
function getUserAge() {
    let age;
    do {
        age = parseInt(prompt("Please enter your age:"));
        if (age <= 0 || isNaN(age)) {
            alert("Invalid age. the age is less than or equal to zero. Please enter a positive value.");
        }
    } while (age <= 0 || isNaN(age));
    return age;
}

// Get user information
const userName = getUserName();
const userGender = getUserGender();
const userAge = getUserAge();

// Alert a welcoming message with the name of the user
alert(`Welcome, ${userName}! You are ${userAge} years old.`);




// another soltion ----------------------------------------------------------------------------------------------

let name = '';
let gender = '';
let age = 0;

// Keep asking for name until a valid input is given
while (name === '') {
    name = prompt("Please enter your name:");
}

// Keep asking for gender until a valid input is given
while (gender !== 'male' && gender !== 'female') {
    let genderInput = prompt("Please enter your gender (male or female):").toLowerCase();
    if (genderInput === 'male' || genderInput === 'female') {
        gender = genderInput;
    } else {
        alert("Invalid gender. Please enter 'male' or 'female'.");
    }
}

// Keep asking for age until a valid input is given
while (age <= 0) {
    age = parseInt(prompt("Please enter your age:"));
    if (age <= 0) {
        alert("Age must be greater than zero.");
    }
}

// Welcome message
alert(`Welcome, ${name}!`);
