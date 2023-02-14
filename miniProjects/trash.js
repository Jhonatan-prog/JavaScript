// deleting info
const prompt = require("prompt-sync")();

const camiloInfo = Object.freeze({
    name: "Camilo Andrade",
    surname: "Perez Castaño",
    age: 17,
    whereabouts: {
        country: "Colombia",
        city: "Medellin"
    },
    parents: {
        mother: {
            name: "Camila Suarez",
            age: 35
        },
        father: {
            name: "Juan David Perez",
            age: 45
        }
    },
    married: false
});


const camiloInfoCopy = Object.assign(camiloInfo)
const {parents: camiParents} = camiloInfoCopy;
const {whereabouts: nativeTonw} = camiloInfoCopy;

function deleteEle(parent, whereabout) {
    delete parent.mother
    delete parent.father
    delete whereabout.country
    delete whereabout.city

    return camiloInfoCopy
}

let password = "cami";

const removeInfo = new Promise((resolve,reject) => {
    let passwordValidator = password;

    if (passwordValidator === 'cami') {
        try {
            resolve(
                deleteEle(camiParents,nativeTonw)
            );
        } catch (err){
            console.error(err)
        }
    } else {
        reject(
            console.log("we had a problem")
        );
    }
})

removeInfo
    .then((value) => {
        console.log('The informaton was deleted successfully')
        setTimeout(() => {
            console.log('returning data...')
        }, 700)
        setTimeout(() => {
            console.log(value)
        }, 1200)
    })
    .catch((error) => console.log(error))