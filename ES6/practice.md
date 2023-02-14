#### Practice code to keep up

```javascript
const studentsPersonalInfo = [
    {
    name: "Juan Betancur",
    age: 25,
    country: "Mexico",
    merried: false,
    parents: {
        mother: {
            name: "Sofia",
            age: 48
        },
        father: NaN
    }
    }, 
    {
        name: "Mariana Alvarez",
        age: 24,
        country: "Mexico",
        parents: {
            mother: {
                name: "Camilla",
                age: 47
            },
            father: {
                name: "Sandro",
                age: 48
            }
        }
    }
];

Object.freeze(studentsPersonalInfo);

const {
    parents: parentStundentOne,
    parents: {
        mother: studensMother,
        father: studentsfather 
    }
} = studentsPersonalInfo[0];

const {
    name: StudentOneName, 
    age: StudentOneAge
} = studentsPersonalInfo[0];


function container_addn() {
    const startNum = 0;
    const keys = Object.keys(studentsPersonalInfo[0]);
    const values = Object.values(studentsPersonalInfo[0]);
    const lengthParents = Object.keys(studentsPersonalInfo[0]).length;

    let addn = (startNum) => {
        if (startNum > lengthParents - 1 || startNum < 0) {
            return "";
        }
        console.log(`The keys is: ${keys[startNum]}, and the value is: ${values[startNum]}`)
        return addn(startNum + 1);
    }
    return addn(startNum);
}
container_addn()