"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Task 2
let person_name = "Hello Eric";
console.log(`${person_name} would you like to learn some Python today ?`);
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//Task 3
let person_name = "Zahid Ali";
console.log(person_name.toLowerCase());
console.log(person_name.toUpperCase());
console.log(person_name.charAt(0).toUpperCase() + person_name.slice(1).toLowerCase());
//||||||||||||||||||||||||||||||||||||||||||||||
//Task 4
let famous_person = "Alber Einstein said : ";
console.log(`${famous_person} A person who never made a mistake never tried anything new`);
// |||||||||||||||||||||||||||||||||||||||||||||
//Task 5
let famous_quote = "Imran khan Said : ";
let message = "Never give up, no matter how hard life gets no matter how much pain you fell.";
console.log(famous_quote + message);
//||||||||||||||||||||||||||||||||||||||||||||||
//Task 6
let whitespace = "      Imran Khan       ";
console.log(whitespace); /// include white space
console.log(whitespace.trim()); //Remove white space
//||||||||||||||||||||||||||||||||||||||||||||||
//Task 7
console.log(5 + 3); //8
console.log(12 - 4); //8
console.log(4 * 2); //8
console.log(16 / 2); //8
//||||||||||||||||||||||||||||||||||||||||||||||
//Task 8
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
//||||||||||||||||||||||||||||||||||||||||||||||
//Task 9
let favrt_number = 21;
let message = "This is my favourite number = ";
console.log(message, favrt_number);
//|||||||||||||||||||||||||||||||||||||||||||||
//Task 10
// Today Date = 19-5-2024
//This program uses the inquirer library to prompt the user for their name . It capture
// the user input and logs it to the console..
const inquirer_1 = __importDefault(require("inquirer"));
const answer = await inquirer_1.default.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your name" // it is a question which you want to ask any user..
    }
]);
console.log("Your name is " + answer.name);
console.log(typeof answer.name); // You can check data type
//Task 11
let names = ["Zahid", "Habib", "Qasim", "Muhammad", "Ahmed"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//Task 12
let names = ["Raja", "Mehmod", "Naseer", "Nazeer", "Shahmeer"];
for (let i = 0; i < names.length; i++) {
    console.log("Welcome  " + names[i] + " hope you are having great day!");
}
//Task 13
let favrt_Transport = ["Motorcylce", "Car", "Rikshaw", "Bus", "Van"];
for (let i = 0; i < favrt_Transport.length; i++) {
    console.log("I would like to own a Honda " + favrt_Transport[i]);
}
//Task 14
let Guest = ["Imaran Khan", "Kamran khan Tessori", "Ibrahim Raisi", "Shahbaz Shareef", "Sharjeel Memon"];
for (let i = 0; i < Guest.length; i++) {
    console.log("Dear Sir " + Guest[i] + " I would like to invite to my Dinner");
}
//Task 15
let Guest = ["Imaran Khan", "Kamran khan Tessori", "Ibrahim Raisi", "Shahbaz Shareef", "Sharjeel Memon"];
let absentGuest = Guest.pop();
for (let i = 0; i < Guest.length; i++) {
    console.log("Dear Sir " + Guest[i] + " I would like to invite to my Dinner");
    console.log(`Dear ${absentGuest} we're sorry to hear that you're unable to join us`);
}
//Task 16
let Guest = ["Imaran Khan", "Kamran khan Tessori", "Ibrahim Raisi", "Shahbaz Shareef", "Sharjeel Memon"];
let addguest1 = Guest.unshift("Yousaf Sahab") && Guest.splice(2, 0, "MNA Rafiq Jamali") && Guest.push("Farooq Sattar");
for (let i = 0; i < Guest.length; i++) {
    console.log("Dear Sir " + Guest[i] + " I would like to invite to my Dinner");
}
//Task 17
let Guest = ["Imaran Khan", "Kamran khan Tessori", "Ibrahim Raisi", "Shahbaz Shareef", "Sharjeel Memon"];
let addguest1 = Guest.unshift("Yousaf Sahab") && Guest.splice(2, 0, "MNA Rafiq Jamali") && Guest.push("Farooq Sattar");
let remove = Guest.splice(2, 7);
let i = 2;
for (i = 2; i < remove.length; i++) {
    console.log("Sorry sir " + remove[i] + " We can not invite you");
}
for (let i = 0; i < Guest.length; i++) {
    console.log("Dear Sir " + Guest[i] + " You are still invite to my Dinner");
}
// Task 18
let places = ["New Zealand", "Iceland", "Japan", "Switzerland", "Norway"];
console.log("Original Order", places);
// Alphabatical Order
console.log("Alphabatical Order:", [...places].sort());
//Orginal Order
console.log("Original Order", places);
//Reverse order
console.log("Alphabatical Order:", [...places].sort().reverse());
//Again Orginal Order
console.log("Original Order", places);
// Reverse order
places.reverse();
console.log("Reversed order:", places);
// Task 19
let Guest = ["Imran khan", "Shahbaz Shareef", "Alber Einstein", "Ibrahim Raisi", "Sharejeel"];
console.log(`Iam inviting ${Guest.length} peoples to dinner`);
// Task 20
let countries = ["USA", "Saudi Arabia", "Dubai", "Iran", "Englan", "Turkey"];
console.log("These countries I would like to visit", countries);
// Task 21
let person = { age: 26, name: "Taha", Nationalty: "Pakistani", student: "true" };
console.log(person);
//Task 22
let friends = ["Ali", "Zahid", "Aslam"];
console.log(friends[3]); // index error
friends[2];
//Task 23
let car = "subaru";
let personage = 18;
let Tempreture = 45;
let Qualification = "Graduated";
let drivigTestScore = 60;
console.log("Is car == subaru ? I predicit true.");
console.log(car == "subaru"); //True
console.log("Is car == Toyota ? I predicit False");
console.log(car == "Toyota"); // false
console.log("is personage == 18 ? I predicit true");
console.log(personage == 18); // True
console.log("is personage == 20? I predicit false");
console.log(personage == 20); //False
console.log("is Tempreture == 45 ? I predicat Hot");
console.log(Tempreture == 45); // True
console.log("is Tempreture == 25 ? I predicat Cold");
console.log(Tempreture == 25); //False
console.log("is Qualification == Graduated ? It is eligiable for Job");
console.log(Qualification == "Graduated"); //True
console.log("is Qualification == Intermediate ? It is not eligiable for Job");
console.log(Qualification == "Intermediate"); //False
console.log("is drivigTestScore == 60 ? I predicit You are eligiable for license");
console.log(drivigTestScore == 60); //True
console.log("is drivigTestScore == 50 ? I predicit You are not eligiable for license");
console.log(drivigTestScore == 50); //false
// Task 24
// Equality and inequality with Strings
console.log("Apple" == "Apple"); //True
console.log("Apple" == "apple"); // False
//Using the lower function
console.log("Testing with lower case :");
console.log("Apple".toLowerCase() == "apple");
//Numerical Test
console.log("Numerical Tests");
console.log(10 > 5); //True
console.log(2 < 1); //false
//Testing using "and" and "or" operators
console.log("Tests with and and or operators");
console.log(true && false); // True
console.log(true, false);
false;
//Test whether an item is an array
let fruits = ["apple", "banana", "cherry"];
console.log(fruits.includes("apple"));
//Test whether an item in not in array
console.log("is mango not in Fruits");
console.log(fruits.includes("mango"));
// Task 25
let alien_color = "green";
if (alien_color == "green") {
    console.log("You have earned 5 points");
}
//Fails output
alien_color == "green";
if (alien_color == "red") {
    // no output because the condition is false
}
// Task 26
let alien_color = "green";
if (alien_color == "green") {
    console.log("You have earned 5 points for shooting the alien");
}
else {
    console.log("You just earned 10 points");
}
alien_color == "yellow";
if (alien_color == "Green") {
    console.log("You have earned 5 points");
}
else {
    console.log("You have earned 10 points");
}
// Task 27
let Alien_Color = "Green";
if (Alien_Color == "Green") {
    console.log("The player earned 5 points");
}
else if (Alien_Color == "Yellow") {
    console.log("The player earned 10 points");
}
else if (Alien_Color = "red") {
    console.log("The player earned 15 points");
}
// Task 28
let age = 25;
if (age < 2) {
    console.log("The Person is baby");
}
else if (age < 4) {
    console.log("The person is toddler.");
}
else if (age < 13) {
    console.log("The person is kid");
}
else if (age < 20) {
    console.log("The person is Teenager");
}
else if (age < 65) {
    console.log("The person is an Adult");
}
else if (age > 65) {
    console.log("The person is Elder");
}
// Task 29
let favourite_fruits = ["Apple", "Banana", "Strawberry"];
if (favourite_fruits.includes("Banana")) {
    console.log("You really like Banana!");
}
if (favourite_fruits.includes("Apple")) {
    console.log("You really like Apple!");
}
if (favourite_fruits.includes("Strawberry")) {
    console.log("You really like Strawberry!");
}
if (favourite_fruits.includes("Orange")) {
    console.log("You really like Orange!");
}
if (favourite_fruits.includes("Watermelon")) {
    console.log("You really like Watermelon");
}
// Task 30
let usernames = ["admin", "user1", "user2", "user3", "user4"];
usernames.forEach(usernames => {
    if (usernames === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${usernames}, thankyou for loginng in again`);
    }
});
// Task 31
let usernames = [];
if (usernames.length === 0) {
    console.log("We need to find some user");
}
else {
    //Greet users
}
//Removing all of usernames from your array, and make sure the correct message is printed
// Task 32
let current_users = ["Zahid", "Ali", "Kabooro", "Mehbob", "Mujtaba"];
let new_users = ["Zahid", "Mujtaba", "Aslam", "Khan", "Sanaullah"];
new_users.forEach(newUser => {
    if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    }
    else {
        console.log(`${newUser}  is available.`);
    }
});
// Task 33
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(number => {
    let suffix = "th";
    if (number % 10 === 1 && number % 100 !== 11) {
        suffix = "st";
    }
    else if (number % 10 === 2 && number % 100 !== 12) {
        suffix = "nd";
    }
    else if (number % 10 === 3 && number % 100 !== 13) {
        suffix = "rd";
    }
    console.log(number + suffix);
});
// Task 34
let favrt_Pizza = ["Margherita Pizza", "Pepperoni Pizza", "BBQ Chicken Pizza"];
for (let i = 0; i < favrt_Pizza.length; i++) {
    console.log("I like :" + favrt_Pizza[i]);
}
console.log("How much you like Pizza ?");
console.log("I really love Pizza!");
// Task 35
let animals = ["Elephants", " Dolphins", "Chimpanzees"];
for (let i = 0; i < animals.length; i++) {
    console.log("The " + animals[i] + " are highly intelligent animals");
}
console.log("All three animals live in groups with complex social structures.");
// Task 36
function make_shirt(size, message) {
    console.log("The shirt size is " + size, "and the message on it is " + message);
}
make_shirt("Medium", "It is khaddii branded");
// Task 37
function make_shirt(size = "large", message = "I love Typescript") {
    console.log(`This shirt size is ,${size} and ${message}`);
}
make_shirt();
make_shirt("Medium");
make_shirt("Any", "I love this branded shirt");
// Task 38
function describe_city(city, country = "Pakistan") {
    console.log(`such as ${city} is in ${country}`);
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Dadu");
// Task 39
function city_country(city, country) {
    console.log(city + country);
}
city_country("Dadu ", "Pakistan");
city_country("Riyadh ", "Saudi Arabia");
city_country("Mumbai ", "India");
// Task 40
function make_album(artist, Title, tracks) {
    let album = { artist, Title };
    if (tracks) {
        album[tracks] = tracks;
    }
    return album;
}
console.log(make_album("Artist one", "The first Album"));
console.log(make_album("Artist Two", "The second Album"));
console.log(make_album("Artis Three", "The Third Album", 12));
// Task 41
let magicians = ["Zahid", "Ali", "Aslam"];
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
show_magicians(magicians);
// Task 42
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
// Assuming this function exists and prints each magician's name
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
let magicians = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
make_great(magicians); // Modifies the original array
show_magicians(magicians); // Show modified names
// Task 43
let magicians = ["Alice", "David", "Chris"];
function make_great(magicians) {
    let greatMagicians = [];
    magicians.forEach(magicians => {
        greatMagicians.push(`${magicians} the Great`);
    });
    return greatMagicians;
}
let greatMagicians = make_great(magicians.slice()); //Creates a new modified array
console.log("Original magicians:");
show_magicians(magicians); //show original names
console.log("Great Magicians:");
show_magicians(greatMagicians); //Show modified names
function show_magicians(magicians) {
    throw new Error("Function not implemented.");
}
// Task 44
function make_sandwich(...items) {
    console.log(`Making a sandwich with : ${items.join(" , ")}.`);
}
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");
// Task 45
function make_car(manufacturer, model, ...options) {
    let car = { manufacturer: str, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}
;
console.log(make_car("Toyota", "Corola", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["Color", "blue"], ["sunroof", "true"]));
