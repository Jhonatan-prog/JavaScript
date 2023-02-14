### OOP practice

```javascript
// main function
function Cars(){ };

Cars.prototype = {
    constructor: Cars,
    wheelNum: 4,
    engineSound: function() {
        return "Sound of a car!!!";
    }
}

function RoadCar(name,brand,color){ 
    this.name = name;
    this.brand = brand;
    this.color = color;
};
RoadCar.prototype = Object.create(Cars.prototype);
RoadCar.prototype.constructor = RoadCar;

let Audi = new RoadCar("Audi",undefined,"Black");
let Chevrolet = new RoadCar("Chevrolet","Chevrolet","gray");

function RtmCars(){ };
RtmCars.prototype = Object.create(Cars.prototype);
RtmCars.prototype.constructor = RtmCars;

let remoteCar = new RtmCars();
remoteCar.engineSound = () => {return "Sound of a remote car!!!"};

// mixins
function ATVs(){ };
ATVs.prototype = Object.create(Cars.prototype);
ATVs.prototype.constructor = ATVs;

let myATVs = new ATVs();

const mixin = (function() {
    return {
        firstATVs: function(atvs){
            atvs.sound = function() {
                return "Sound of a motorcycle!!!"
            }
        }
    }
})();

mixin.firstATVs(myATVs);
console.log(myATVs.sound());