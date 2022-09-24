// Unique Values
const menu = [
  {
    name: 'pancakes',
    category: 'breakfast',
  },
  {
    name: 'burger',
    category: 'lunch',
  },
  {
    name: 'steak',
    category: 'dinner',
  },
  {
    name: 'bacon',
    category: 'breakfast',
  },
  {
    name: 'eggs',
    category: 'breakfast',
  },
  {
    name: 'pasta',
    category: 'dinner',
  },
];
// map - get all instances - array
// new Set - narrow down to only 1 of each value - object
// [... new Set] - spread operator turns "new Set" object into array

// Ex. 1: basic map
const categories1 = menu.map((item) => item.category);
console.log('categories1', categories1);

// Ex. 2: "new Set()" returns unique values in an object (not array)
const categories2 = new Set(menu.map((item) => item.category));
console.log('categories2', categories2);

// Ex. 2.1: converting new Set object into array using spread operator [...x, ...y]
const categories3 = ['all', ...new Set(menu.map((item) => item.category))];
console.log('categories3', categories3);

// Posting Ex. 2.1 to HTML
const result = document.querySelector('.result');
result.innerHTML = categories3.map((category) => {
  return `<button>${category}</button>`
})
.join('');