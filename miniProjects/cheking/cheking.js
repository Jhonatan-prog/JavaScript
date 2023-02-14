const prompt = require("prompt-sync")();
const kevinInfo = {
    name: "Kevin Carlos Steven",
    age: 18,
    data: {
        username: "kevelos-12",
        password: "KCSlovely124-wwx_S",
        country: "Canada",
        familyMembers: {
            Mother: {
                name: "Diana Girardota Montanarez",
                age: 29
            },
            Father: NaN,
            brother: {
                name: "Sebastian Girardota Landez",
                age: 12
            }
        },
        onlineTime: 10,
        education: "Instituto Tecnico Industrial Pascual bravo"
    },
}

const {data: {
    familyMembers: mainFamily
}} = kevinInfo;

mainFamily.Mother.age = 30;

const coreFaLength = Object.keys(mainFamily).length;

// you can create a codition if value is NaN
let KeFaNames = [];
for (let i = 0; i < coreFaLength; i++) {
    KeFaNames.push(mainFamily[Object.keys(mainFamily)[i]].name)  
}

const lookingFor = prompt("What person of family's kevin you are looking for? ")
console.log("loading...");

(function(Names) {
    for (let i = 0; i < Names.length - 1; i++) {
        setTimeout(() => {
            try {
                if (Names[i] === undefined) {
                    throw new TypeError(""); // it stops execution
                };
                
                const matching = new RegExp(`${lookingFor}.+?\s?`, 'i');
                if (Names[i].match(matching)) {
                    console.log("You are looking for: " + Names[i]);
                } else {
                    console.log("Sorry, the person you are looking for does not exist");
                }
            } catch (err){
                console.error(err.message);
            }
        }, 500)
    }
})(KeFaNames);

// adding new person
class Info {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let familyObject = mainFamily;
let uncle = new Info("camillo Peñas", 24);

const adding = (function(objc){
    // for loop maybe for 1 or more (recursive maybe)
    return objc.uncle = {
        name: uncle.name,
        age: uncle.age
    }
})(familyObject);

setTimeout(() => {
    (async function() {
        await adding()
    })
    console.log(familyObject);
}, 500)