## Constructors

```javascript
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
let prototypeProps = [];

for (let prop in canary) {
  if (canary.hasOwnProperty(prop)) {
    ownProps.push(prop)
  } else {
    prototypeProps.push(prop)
  }
}

console.log(ownProps)

// to not duplicate values
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");
Dog.prototype.numLegs = 4; // Now all instance of Dog gonna have 4 legs by default

// Efficient way is to set the prototype
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  constructor: Dog, // always
  numLegs: 4,
  eat: function() {
    console.log("mua mua mua")
  },
  describe: function() {
    console.log("beatiful and big dog")
  }
}

// checking prototype 
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy"); // beagle inherited the name of Dog

Dog.prototype.isPrototypeOf(beagle)
Object.prototype.isPrototypeOf(Dog.prototype)
```

## DRY and inheritance
```javascript
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype); 
console.log(beagle.eat())

// 
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }
Dog.prototype = Object.create(Animal.prototype); // filling the prototype of Dog
Dog.prototype.constructor = Dog; // it means it was constructed by Dog and not by Animal
Dog.constructor

let beagle = new Dog();

// Overriding an inherited method
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
Penguin.prototype.fly = function() {
  return "Alas, this is a flightless bird."
}

let penguin = new Penguin();
console.log(penguin.fly());

```

### Dealing with unrelated objects 

```javascript

// mixins
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

function glideMixin(myObjct) {
  myObjct.glide = function() { // myObjct.glide = myObjct.prototype.glide
    console.log("glide")
  }
}

glideMixin(bird); // glide
glideMixin(boat); // glide
```

### Closure and mixins

```javascript
// private
function hisName(name) {
    this.printHisName = function() {
        return name;
    }
}

let myName = new hisName("Camillo Puerta");
console.log(myName.printHisName());
```

### Immediately Invoked Function Expression

```javascript
(function () {
  console.log("A cozy nest is ready");
})(); // Immediately Invoked, (anonymous function 'cause it does not have name)

// using mixins
const funModule = (function() {
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      }
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      }
    }
  }
})();
```

#### Proxy

```javascript 
const person = {
    name: "",
    surname: "",
    age: 0
}

const handler = {
    // make validation
    set(obj,porp,value) {
        if (Object.keys(obj).indexOf(porp) === -1) return 
        obj[porp] = value;
    }
}

let jon = new Proxy(person, handler)

jon.name = "Jon"
jon.surname = "Garcia"
jon.age = 24
jon.meeried = false

console.log(jon)