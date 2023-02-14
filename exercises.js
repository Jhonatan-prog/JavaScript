// 1
function sumAll(arr) {
  arr.sort((a,b) => a-b)

  let newArray = [];
  let staticN = arr[0];

  while (staticN <= arr[arr.length - 1]) {
    newArray.push(staticN)
    staticN += 1
  }
  
  return newArray.reduce((sum,elem) => sum + elem);
}

console.log(sumAll([5, 10]));

// 2
function diffArray(arr1, arr2) {
  const newArr = arr1
  .concat(arr2)
  .filter(elem => !arr1.includes(elem) || !arr2.includes(elem));
  
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// 3
function destroyer(arr) {
  let argu = Object.keys(arguments)

  for (let i = 1; i < argu.length; i++) {
    arr.splice(arr.indexOf(argu[i]), 1)
  }

  return arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));


// 3 more

function destroyer(arr, ...remove) {
  let newArr = [];
  newArr = arr.filter(elem => !remove.includes(elem))

  return newArr
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

// 4
function whatIsInAName(collection, source) {
  const arr = [...collection];
  let sourceKeys = Object.keys(source)
  let sourceValues = Object.values(source)
  let arrValues = Object.values(arr)

  return arr.filter(objc => {
    if (objc.hasOwnProperty(sourceKeys)) {
      return {
        sourceKeys: sourceValues
      }
    }
  });
}

console.log(
whatIsInAName([{ first: "Romeo", last: "Montague" }, 
{ first: "Mercutio", last: null }, 
{ first: "Tybalt", last: "Capulet" }], 
{ last: "Capulet" }));