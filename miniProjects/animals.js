function LandAnimals(){ };
LandAnimals.prototype = {
    constructor: LandAnimals,
    tail: true,
    legsNum: 4
}

function Cat(type, color, breed){
    this.type = type;
    this.color = [...color];
    this.breed = breed;
}

Cat.prototype = Object.create(LandAnimals.prototype);
Cat.prototype.constructor = Cat;
Cat.prototype.sound = () => {
    return "miau miau"
}

let Persian = new Cat("cat", ["brown", "gray", "white"], "Persian Cat")

function Dog(type, color, breed){ 
    this.type = type;
    this.color = color;
    this.breed = breed;
};

Dog.prototype = Object.create(LandAnimals.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.sound = () => {
    return "wof wof!"
}

let Terrier = new Dog("Terrier", "brown with black", "Airdale Terrier")

function AirAnimals() { };
AirAnimals.prototype = {
    constructor: AirAnimals,
    wings: true,
    feather: true,
    legsNum: 2,
}

function Eagle(breed) { 
    this.breed = breed;
};
Eagle.prototype = Object.create(AirAnimals.prototype);
Eagle.prototype.constructor = Eagle;

let snakeEagles = new Eagle("Black-chested Snake-eagle Circaetus pectoralis");
let baldEagle = new Eagle("bald eagle");

function Plane(model, type) {
    this.model = model;
    this.type = type;
};

let jet = new Plane("AK-12", "Regional Jet");

// mixins
function flyMixin(Object) {
    Object.prototype.fly = function() {
        return "it can fly";
    }
}

flyMixin(Eagle);
flyMixin(Plane);

console.log(jet.fly())


function WaterAnimals() { };
WaterAnimals.prototype = {
    fin: true,
    grills: true,
}

function Shark(type) {
    this.type = type;
    this.teethNum = 350;
    this.timeSleep = () => {
        return "sharks sleep 10min";
    }
};
Shark.prototype = Object.create(WaterAnimals.prototype);
Shark.prototype.constructor = Shark;

let BShark = new Shark("Dusky Shark")

// properties
let ownProp = [];
let propProto = [];
for(prop in BShark) {
    if (BShark.hasOwnProperty(prop)) {
        ownProp.push(BShark[prop])
    } else {
        propProto.push(prop)
    }
}

function Submarine(type) { 
    this.type = type;
};
// push some array items in sub
 

// mixin
const waterMixin = (function(){
    return {
        mixinOne: function(obj){
            obj.prototype.dive = () => {
                // return this if constructor is === to obj else return that
                return `the ${BShark.type} can dive into the water`;
            }
        }
    }
})();

waterMixin.mixinOne(Shark);
waterMixin.mixinOne(Submarine);

console.log(BShark.dive())