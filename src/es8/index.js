const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
};

// ES8 Object entries
const entries = Object.entries(data); // Nos devuelve matrices
console.log(entries);
console.log(entries.length);

const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
};

// ES8 Object values
const values = Object.values(data); // Nos devuelve los valores
console.log(values);
console.log(values.length);

// ES8 Padding
const string = 'Hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, ' --------'));
console.log('food'.padEnd(12, '  -------'));

// ES8 Trailing commas
const obj = {
    name: 'Oscar',
};