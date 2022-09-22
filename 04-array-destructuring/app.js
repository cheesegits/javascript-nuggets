// faster/easier way to access/unpack variables from arrays

const fruits = ['orange', 'banana', 'lemon'];
const friends = ['john', 'peter', 'bob', 'anna', 'kelly'];

const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];

console.log(fruit1, fruit2, fruit3);

// const [john, peter, bob, anna, kelly, susan] = friends 
// console.log(john, peter, bob, anna, kelly, susan); // susan is undefined

const [john, , bob, , kelly] = friends; // "," skips peter and anna
console.log(john, bob, kelly);

let first = 'bob';
let second = 'john';

// // long way of switching values
// let temp = second;
// second = first;
// first = temp;

// short way of switching values via destructuring
[second, first] = [first, second]
console.log(first, second)