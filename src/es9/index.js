const obj = {
    name: 'Oscar',
    age: '32',
    country: 'MX',
};

// ES9 Spread operator with not defined variables
let { name, ...all } = obj;
console.log(name, all);

const obj2 = {
    name: 'Oscar',
    age: 32,
};

// ES9 Spred operator for join objects
const obj3 = {
    ...obj2,
    country: 'MX',
};
console.log(obj3);

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello world!'), 1500)
            : reject(new Error('Test Error'));
    });
};

// ES9 Finally in promises
helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Ya terminó!'));

// ES9 Access to group blocks of the regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);