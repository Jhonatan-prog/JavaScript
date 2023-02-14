To ensure your data doesn't change, JavaScript provides a function 
(**Object.freeze**) to prevent data mutation. With that code you cannot 
change anything from the object.

```javascript
const booksPrice = {
    book1: 50,
    book2: 20,
    book3: 30
};

// SomeOne else wants to change the price of the book1
Object.freeze(booksPrice);
booksPrice.book1 = 220;

console.log(booksPrice);

// row function
const magic = () => new Date();

// flex function
const increment = (number = 1, value = 1) => number + value;

// rest parameter
const myFunc = (num,...fruits) => {
    const a = fruits
    return num + ". " + a
}

console.log(myFunc(1,["apple","tangarine","watermelon"]))

// spread operator
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];

console.log(arr2);

// shortcut

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const {today, tomorrow} = HIGH_TEMPERATURES;

// assigning variables
const {today:temperature1Today, tomorrow:temperature2Tomorrow} = HIGH_TEMPERATURES;
```

#### Destructuring
```javascript

const myObjc = {
    familyMenbers: {
        Mother: "Ernes",
        Brother: "Sebastian"
    },
    familyAge: {
        Mother: 46,
        Brother: 22
    },
    familyCaarer: {
        Mother: "Teacher",
        Brother: "Arquitec"
    }
}

const {familyMenbers: {
    Mother: motherName, 
    Brother: brotherName // now brotherName is equal to Sebastian
}} = myObjc;

console.log(myObjc.familyMenbers)

// arrays
myArray = [1,2,3,4,5,6];
[a,b] = myArray;

console.log(a,b)

let a = 8, b = 6;
[a,b] = [b, a]

// Destructuring 
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ({max,min}) => (max + min) / 2.0;
console.log(half(stats))

// before
const createPerson = (name, age, gender) => {
  return {
    name: name,
    age: age,
    gender: gender
  };
};

//after
const createPerson = (name, age, gender) => ({name, age, gender});
```

#### Maps and Sets
```javascript
// Maps
const fruitsList = Object.freeze(new Map([
    ["Apples", 10],
    ["Banana", 5],
    ["strawberries", {
      Mexico: 30,
      Colombia: 20
    }],
    ["watermelons", 5],
    ["lemons", 30]
])) 

console.log(fruitsList)

// Sets
// unique content
const mySet = Object.freeze(new Set(
    [1,2,3,4,5,6,7,8,9,10,10]
))

mySet.clear()
mySet.add([1,2,3,4,5])
mySet.delete(2)
console.log(mySet)
```

#### constructors

```javascript
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}

const carrot = new Vegetable('carrot');
console.log(carrot.name);

// getters and setters

/*getters to get information
  setters to update information*/

get temperature() {
  return 5/9 * (this.Fahrenheit - 32)
}

set temperature(celcius) {
  this.Fahrenheit = celcius * 9.0 / 5 + 32
  return this.Fahrenheit
}
```

#### Exportations

```javascript
import * as myMathModule from "./math_functions.js";

// default export
// you can only have one export default function per sheet
// if the import name is "undefine", the import will take the value by default (do not use curly braces)

export default function subtract(x, y) {
  return x - y;
}
```

#### Promise

```javascript
const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

// this is after resolve the promise
makeServerRequest.then(result => {
    console.log(result)
})
// this is after reject the promise
makeServerRequest.catch(error => {
  console.log(error)
})
```

### Array to Object

```javascript
const person = [
  ['name', 'Valeria'],
  ['age', 27]
]

let obj = person.reduce((total, element) => {
  const [prop, value] = element;
  return {...total, [prop]: value}
},{});

console.log(obj)

// or 

let obj = Object.fromEntries(person)

console.log(obj)
```

#### Gen and Iterables

```javascript
function* iterable (x, y) {
    yield x + y * 2
    yield x + y * 3
    yield x + y * 4
    yield x + y * 5
}

let iter = iterable(1,2)

console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
```