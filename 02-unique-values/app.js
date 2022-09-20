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
// const categories = ['all', ...new Set(menu.map((item) => item.category))];
// map - get all instances
// new Set - narrow down
// ['all',...] - turn it back to array

// Ex. 1: basic
// const categories = menu.map((item) => item.category);
// console.log(categories);

// Ex. 2: "new Set()" returns unique values in an object (not array)
// const categories = new Set(menu.map((item) => item.category));
// console.log(categories);

// Ex. 2.1: converting new Set object into array using spread operator [...x, ...y]
const categories = ['all', ...new Set(menu.map((item) => item.category))];
console.log(categories);

const result = document.querySelector('.result');
result.innerHTML = categories.map((category) => {
  return `<button>${category}</button>`
})
.join('');