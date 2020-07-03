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

let name = 'rubén';
let age = 25;

// ES5
obj = {
    name: name,
    age: age
};
console.log(obj);

// ES6 Parameters in objects
obj2 = {
    name,
    age
};
console.log(obj2);

const names = [
    {
        name: 'Ruben',
        age: 25
    },
    {
        name: 'Alberto',
        age: 24
    }
];

let listOfNames = names.map(function (item) {
    console.log(item.name);
});

// ES6 Arrow functions
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age) => {
    console.log(name, age);
}

const listOfNames4 = name => {
    console.log(name);
}

const square = num => num * num;

// ES6 Promises
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Ups!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hi'))
    .catch(error => console.log(error))