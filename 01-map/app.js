// MAP Method
const people = [
  {
    name: 'bob',
    age: 20,
    position: 'developer',
  },
  {
    name: 'anna',
    age: 25,
    position: 'designer',
  },
  {
    name: 'susy',
    age: 30,
    position: 'the boss',
  },
  {
    name: 'john',
    age: 26,
    position: 'intern',
  },
];
// Quokka.js - Extension
// returns a new array
// does not change the size of original array (unlike filter)
// uses values from original array when making new one

// Ex. 1: single line
const ages = people.map((person)=> person.age);
console.log(ages);

// Ex. 2: using as a reference
const getAges = (person) => person.age;
const ages2 = people.map(getAges);
console.log(ages2)

// Ex. 3: returning an object
const newPeople = people.map((person) => {
return {
  firstName: person.name.toUpperCase(),
  oldAge: person.age + 20
}
})
console.log(newPeople)
 
// Ex. 4: posting to HTML
const names = people.map((person)=> `<h2>${person.name}</h2>`);
const result = document.querySelector('#result');
result.innerHTML = names.join('');