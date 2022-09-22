// Filter - returns a new array, can manipulate the size of new array (unlike map), returns based on condition
// Find - returns single instance (object), returns first match, if no match - undefined
// Find is better than filter for finding single instances like unique IDs

const people = [
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'peter', age: 25, position: 'designer' },
  { name: 'susy', age: 30, position: 'the boss' },
  { name: 'anna', age: 35, position: 'intern' },
];

const fruits = ['apple', 'pear', 'lemon'];

// filter

// filter - returns nothing, only console.logs
const youngPeople = people.filter((person) => {
  console.log('person:', person)
});

// filter - returns array of conditionally true items, all items
const youngPeople2 = people.filter((person)=> {
  return true
});
console.log('youngPeople2:', youngPeople2);

// filter - returns array of conditionally true items, only items under age 30
const youngPeople3 = people.filter((person)=> {
  // if (person.age < 30) {
  //   return person;
  // }
  return person.age < 30; // also returns because condition is either true/false
});
console.log('youngPeople3:', youngPeople3); // array with 2 objects

// filter - arrow function's implicit return
const developers = people.filter((person) => person.position === 'developer');
console.log('developers:', developers); // returns array with single object

// filter - no match
const seniorDevs = people.filter((item) => item.position === 'senior dev');
console.log('seniorDevs:', seniorDevs); // returns empty array



// find - returns single instance, not in an array

// find - returns single instance, object in this case
const peter = people.find((person)=> person.name === 'peter');
console.log('peter:', peter); // returns object person

// find - returns single instance, string in this case
const fruit = fruits.find((fruit)=> fruit === 'lemon');
console.log('fruit:', fruit); // returns string 'lemon'

// find - no match

// find - returns undefined because condition is false for every instance
const oldPerson = people.find((person) => person.age > 35);
console.log('oldPerson:', oldPerson); // returns undefined

// multiple matches - first match
const randomPerson = people.find((person) => person.age < 35);
console.log('randomPerson:', randomPerson); // returns first match

// filter - filter requires square bracket notation to access values
const anna = people.filter((person)=> person.name === 'anna');
console.log('anna:', anna); // returns object in an array
console.log('anna[0].position:', anna[0].position); // returns 'intern'
