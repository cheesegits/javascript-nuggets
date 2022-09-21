// Changing the object keys dynamically using square bracket notation

let appState = 'loading';
let keyName = 'computer';

appState = 'error';

const app = {
  [appState]:true
}

app[keyName] = 'apple';

console.log(app);

const state = {
  loading: true,
  name: '',
  job: ''
}

let updateState = (key, value) => {
  state[key] = value
}

updateState('name', 'john');
updateState('job', 'developer');
updateState('loading', false);

updateState('products', [])
updateState('name', 'peter');

console.log(state);