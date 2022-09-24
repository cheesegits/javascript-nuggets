// faster/easier way to access/unpack values from objects

const bob = {
  first: 'bob',
  last: 'sanders',
  city: 'chicago',
  siblings: {
    sister: 'jane',
  },
};

// creating variables through dot notation
const firstName = bob.first;
const lastName = bob.last;
const sister = bob.siblings.sister; // nested object

console.log(firstName, lastName, sister);

// curly braces for destructuring object
// unlike destructuring arrays, order doesn't matter because directly accessing properties by name
const {last: shakeAndBake, first, city, zip, siblings:{sister:favoriteSibling}} = bob; // renaming variable with :alias
console.log(first, city, zip, shakeAndBake, favoriteSibling); // zip is undefined because property name must be in original object

// destructuring inside function body
function printPerson(person) {
  const {first, last} = person
  console.log(first, last);
}

printPerson(bob);

// destructuring object inside parameter
// used often with React components/props
function printPerson2({first, last, city, siblings:{sister}}) {
  console.log(first, last, city, sister);
}

printPerson2(bob);
