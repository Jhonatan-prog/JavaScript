const prompt = require("prompt-sync")();

const guessNumber = Math.floor(Math.random() * 100);
let userNum = prompt('Enter number between 0 and 100: ');
/* console.log(parseInt(userNum) === NaN)
console.log(typeof parseInt(userNum))
console.log(typeof NaN)
 */
function onlyNumbers(){
    while (userNum > 100 || userNum < 0) {
        console.log("That number is not between 0 and 100");
        userNum = Number(prompt('Write a number between 0 and 100: '));
        
        if (userNum > 0 && userNum < 100) break;
    }
}

onlyNumbers();


if (guessNumber === userNum) {
    console.log(`We have a WINNNERRRR!!!!!, the number was: ${guessNumber}`);
} else {
    while (userNum !== guessNumber) {
        // finish this part
        switch(true) {
            // those two overwrite the other code
            case userNum < guessNumber:
                console.log("Too low");
                break;

            case userNum > guessNumber:
                console.log("Too high");
                break;

            case userNum >= guessNumber - 5 && userNum <= guessNumber + 5:
                console.log("You are actually close, bro");
                break;
        }

        console.log(guessNumber);
        userNum = Number(prompt('Write another number between 0 and 100: '));
        onlyNumbers();

        if (userNum == guessNumber) {
            console.log(`WI, WI, WI, WINNERRRR, FINALLY. The number effectively is: ${guessNumber} `);
            console.log();
            break;
        }
    }
}