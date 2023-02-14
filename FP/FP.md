### Functional Programming
Functional programming is all about creating and using non-mutating functions

##### Principles
1. Don't alter a variable or object
2. Declare function parameters
3. pure functions (output is always the same)

```javascript
// callbacks are functions passed into another function
const prepareGreenTea = () => 'greenTea';

const prepareBlackTea = () => 'blackTea';

const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);

// not change things. Changes lead to bugs.
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(arr,bookName) {
  let newArray = [...arr]; // copy
  
  newArray.push(bookName);
  return newArray;
}

function remove(arr,bookName) {
  let newArray = [...arr]; // copy
  const book_index = newArray.indexOf(bookName);

  if (book_index >= 0) {
    newArray.splice(book_index, 1);
    return newArray;
  }
}

// Map -> returns a new array and does not mute the original array
// map(element, index, array)
const ratings = watchList.map(item => ({
  title: item["Title"],
  rating: item["imdbRating"]
}));

// myMap
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  this.forEach(element => newArray.push(callback(element)))

  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});

// filter
const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
];

under30 = users.filter(user => user.age < 30) // if the conditions is true create a new array with that element
console.log(under30)

// own filter
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i]) === true) {
      newArray.push(this[i])
    }
  }

  return newArray;
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});

// SECOND

console.log(users.filter(obj => obj.name.match(/^A/)))

// slice method (does not mutate array)
// splice method (mutate array)

// concat (does not mutate either of the original arrays)
arrX = [1,2,3].concat([4,5,6])
console.log(arrX) // [1, 2, 3, 4, 5, 6]

// reduce
// reduce(accumulator, current element, index, array)
function getRating(watchList) {
  let length = watchList
  .filter(obj => obj.Director === "Christopher Nolan")
  .map(obj => Number(obj.imdbRating)).length;

  let averageRating = watchList
  .filter(obj => obj.Director === "Christopher Nolan")
  .map(obj => Number(obj.imdbRating))
  .reduce((average, num) => average + num) / length; 

  return averageRating;
}

console.log(getRating(watchList));
```

### Sort
It mutates the array

```javascript
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  let newArr = arr.slice(0)
  return newArr.sort((a,b) => a - b)
}

console.log(nonMutatingSort(globalArray)); 
```


### Split

```javascript
function splitify(str) {
  return str.split(/\s|[-,.]/g)
}

console.log(splitify("Hello World,I-am code"));
```

### join

```javascript
function sentensify(str) {
  return str.split(/[-.,]/g).join(" ")
}

console.log(sentensify("May-the-force-be-with-you")); // May the force be with you
```

### Practice
```javascript
function urlSlug(title) {
  return title
  .toLowerCase()
  .trim()
  .split(" ")
  .filter(elemen => elemen)
  .join("-")
}

console.log(urlSlug(" Winter Is  Coming"));
```

### Every

```javascript
function checkPositive(arr) {
  return arr.every(currentValue => currentValue > 0) // it checks if every value is greater than zero
}

checkPositive([1, 2, 3, -4, 5]); // retun false
```

### Some

```javascript
function checkPositive(arr) {
  return arr.some(currentValue => currentValue > 0) // it checks if one value is greater than zero if so, pass the test
}

checkPositive([1, 2, 3, -4, 5]); // retun true
```

### Currying Functions

```javascript
function add(x) {
  return function(y) {
    return function(z) {
      return x + y + z
    }
  }
}
 
console.log(add(10)(20)(30));