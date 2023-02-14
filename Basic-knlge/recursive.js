let oddEven = (number) => {
    if (number === 0) {
      return "Odd";
    } else if (number === 1) {
      return "Even";
    } else {
      return oddEven(number - 2);
    }
  }
  
console.log(oddEven(10))

// parseInt

function convertToInteger(str) {
  return parseInt(str)
}

console.log(convertToInteger("a123aaaasd131N23132o2"));