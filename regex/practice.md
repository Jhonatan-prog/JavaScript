#### Practice Codes Regex

```javascript
const prompt = require("prompt-sync")();

// mobile number --> start with 8 or 9, total digit num = 10. 
let number = prompt("Insert phone number please: ");
let checkRgx = /([8-9])(\d{9})/;
let result = checkRgx.test(number);
console.log(result)

// first character upper case, contains lower case alphabet,
// only one digit allowed in between.
let string = prompt("Insert text please: ");
let testRgx = /[A-Z]{1}[a-z]*\d[a-z]/;
let output1 = testRgx.test(string)
console.log(output1)

// email/hotmail ID
let email = prompt("Insert your email/hotmail please: ");
let emailRgx = /([A-Za-z0-9_\-\.])+@(gmail|hotmail)\.com$/;
let output2 = emailRgx.test(email)
console.log(output2)

// testing
let emails = "Andrade@gmail.com, WillianAlzate35@hotmail.co, JuanBell-aCota2@gmail.com";
let regex = /([a-zA-Z-._]+)\.([a-z]+){2,3}$/g;
let matches = emails.match(regex);

for (match of matches) {
    console.log(match)
}

// lookahead
let string = "This is my number 2$ regex and number 5";
let regex = /\d+(?=\$)/g; // let regex = /\d+(?!\$)/g;
let match = string.match(regex)
console.log(match)

// lookbehind
let str = "0 12 -5 123 -18";
let regexp = /(?<!-)(?<!\d)\d+/g;

console.log(str.match(regexp));

// practice
let str = `
<html>
  <body style="height: 200px">
  ...
  </body>
</html>
`;

let regexp = /(?<=<body.*?>)/g;

str = str.replace(regexp, `<h1>Hello</h1>`);
console.log(str)

// my exercise
let string = "jhoNatasxPP2-235w-2.karx@gmail.com.co";
let regex = /(?<=\.)[a-zA-Z0-9-.]+@(gmail|hotmail)\.com\.co/i;
let matches = string.match(regex)

console.log(matches)


// matching decimal numbers
/^[+-]?(\d*)\.?(?=\d)(\d+)$/g