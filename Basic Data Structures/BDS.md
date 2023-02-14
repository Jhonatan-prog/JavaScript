#### Arrays

```javascript
// unshift and push

function mixedNumbers(arr) {
  arr.unshift('I', 2, 'three')
  arr.push(7, 'VIII', 9)
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));

// shift and pop

function popShift(arr) {
  let popped = arr.pop(); // initializating
  let shifted = arr.shift(); // initializating
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));

// removing elements in the middle 
// parameter 1: start to delete, parameter 2: how many elements
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.shift()
arr.splice(2,4)
console.log(arr);

// parameter 3: it adds element(s) in the places you removed the others
arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");

// slice(start,end): extract element from an array
function forecast(arr) {
  arr = arr.slice(2,4)
  return arr;
}

// spread operator
let fragment = ['to', 'code'];
let sentence = ['learning', ...fragment, 'is', 'fun'];

// indexOf and for loop
// if (indexOf) returns -1 it means that the element does not exist

function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) === -1) {
      newArr.push(arr[i])
    }
  }
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
```

#### Objects
```javascript
objectName.origin = 'South Korea';
objectName['hair color'] = 'dyed orange';
// same as python

// changing values in complex objects
nestedObject.data.onlineStatus.busy = 10;

// deleting info
delete foods.apples;
delete foods.plums;
delete foods.strawberries;

// cheking out the existence of smthg
users.hasOwnProperty('Alan'); // true
'Alan' in users; // true

// iterating an object
const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  let counter = 0;
  for (let user in usersObj) {
    if (usersObj[user].online === true) {
      counter += 1;
    }
  }
  return counter;
}

console.log(countOnline(users));
Object.keys(users) // return a list of properties