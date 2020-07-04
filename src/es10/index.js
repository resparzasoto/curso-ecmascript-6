let array = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];

// ES10 Flat array
console.log(array);
console.log(array.flat(2));

// ES10 Flat map array
let array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap(value => [value, value * 2]));

let hello = '                    hello world!          ';
console.log(hello);

// ES5 trim
console.log(hello.trim());

// ES10 trimStart
console.log(hello.trimStart());

// ES10 trimEnd
console.log(hello.trimEnd());

// ES10 Optional catch
try {
    
} catch {
    error // El error ya estará disponible sin necesidad de indicarlo
}

let entries = [['name', 'oscar'], ['age', 32]];

// ES10 Key-Value from array
console.table(Object.fromEntries(entries));

// ES10 Symbol object
let mySymbol = 'My symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);