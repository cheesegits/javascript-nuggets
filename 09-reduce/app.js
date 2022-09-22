// Reduce
// iterates, callback function
// reduces to a single value - number, array, object
// 1st parameter ('acc') - total of all calculations
// 2nd parameter ('curr') - current iteration/value

// most powerful array method, capable of replacing filter and find, but more complicated

const staff = [
  { name: 'bob', age: 20, position: 'developer', salary: 100 },
  { name: 'peter', age: 25, position: 'designer', salary: 300 },
  { name: 'susy', age: 30, position: 'the boss', salary: 400 },
  { name: 'anna', age: 35, position: 'intern', salary: 10 },
];

const dailyTotal = staff.reduce((total, person) => {
  console.log(total);
  // console.log(person.salary);
  total += person.salary;
  return total // always, always return a total, otherwise undefined
}, 0) // 0 is the initial value

console.log(dailyTotal);