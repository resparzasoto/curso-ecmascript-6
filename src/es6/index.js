function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

//ES6 Default params
function myNewFunction(name = 'oscar', age = 32, country = 'MX') {
    console.log(name, age, country);
}

myNewFunction();
myNewFunction('Ricardo', '23', 'CO');

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// ES6 Template literals
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n"
+ "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
console.log(lorem);

///ES6 Multilines
let lorem2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;
console.log(lorem2);

let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
};
console.log(person.name, person.age, person.country);

// ES6 Destructuring
let { name, age, country } = person;
console.log(name, age, country);

// ES6 Spread operator
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Oscar', 'Julian', 'Ricardo'];
let education = ['David', ...team1, ...team2];
console.table(education);

// ES6 let
{
    var globalVar = 'Global var';
}

{
    let globalLet = 'Global let'; // Block scope
    console.log(globalLet);
}

console.log(globalVar);
console.log(globalLet); //Not defined

// ES6 const
const a = 'b';
a = 'a'; // Assignment to constant variable
console.log(a);
