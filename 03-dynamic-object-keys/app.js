// dot notation

const person = {
  name: 'john'
};
console.log(person.name);

person.age = 25; // creating key/value after variable declaration
console.log(person);


// square bracket notation

const items = {
  'featured-items':['item1', 'item2'] // hyphenated key requires quotes, but cannot use dot notation to access key
}
console.log(items["featured-items"]) // hyphenated keys automatically change from dot notation to square bracket notation
console.log(person['name']);


// Changing the object keys dynamically using square bracket notation

let appState = 'loading';

const app = {
  [appState]:true // key changes dynamically
}

console.log(app)

appState = 'error'; // does not dynamically change key after object is created - why?
console.log(app)

const keyName = 'computer';
app[keyName] = 'apple'; // adds new key and value after object is created
console.log(app)


// using a function to change a key's value
const state = {
  loading: true,
  name: '',
  job: ''
}

function updateState (key, value) {
  state[key] = value
}

updateState('name', 'john'); // changed value
updateState('job', 'developer'); // changed value
updateState('loading', 'false'); // changed value
updateState('product', []); // added both key and value
console.log(state);

// is there a way to delete a key in an object without creating a new object?