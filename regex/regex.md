```javascript
let myString = "Hello, World!";
let myRegex = /Hello/;
// i: ignore the case, g: extract pattern more than once
let myRegex2 = /Hello|World!|love/gi;
let result = myRegex.test(myString);

// difference
'string'.match(/regex/);
// match return the string
/regex/.test('string');
// test return false or true

let unRegex = /.un/;
// ouput(run,pun,sun)

let bgRegex = /b[aiu]g/;
// [aiu] you can accept 3 of those letters
let myRegex = /[h-s2-6]/ig;
// shortcut, accept letters from H to S or from 2 to 6

/* negated character sets*/
let myRegex = /[^aeiou]/gi;
// those vowels won't appear, /* Can also be used to find smthg at the star */

// to find repeated matches
let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; // output ['ss','ss']

// occur zero o more times
let chewieRegex = /Aa*/;

//(+) One or more times, (*) Zero or more times

// ? = lazy matching (finds smallest part of a string, use after a quantifiers (+,*,??))
// with lazy matching the quantifiers won't take many characters
let myRegex = /s[a-z]*?h./gi;

// find somthg at the end of an string
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // output(true)

// shortcut
let longHand = /[A-Za-z0-9_]+/; // opposite [^A-Za-z0-9_] with (\W)
let shortHand = /\w/; // (\d) just numbers [0-9] (\D) non-nums

// whitespaces
let countWhiteSpace = /\s/g; // search for everyting except whitespaces (\S)
// return true if the string has spaces

// range
let ohRegex = /Oh{3,6} no/; // return True if h appears between (3 and 6) time, otherwise, return false
// {3, } three or more
// {3} only three

// zero or one
let regex = /myRege?x/;

// match passwords that are greater than 5 characters long, and have two consecutive digits
let pwRegex = /(?=\w{6})(?=\w*\d{2,})/;

// enclousing values to match repeated strings
let reRegex = /^(\d+)\s\1\s\1$/;

// capture groups (change order)
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/;
let replaceText = "$3 $2 $1";
let result = str.replace(fixRegex, replaceText);
console.log(result)

// names for capturing groups
output = post.match(/(?<name1>\w+)\/(?<name2>\d+)/)
```