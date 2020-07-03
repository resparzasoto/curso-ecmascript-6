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
