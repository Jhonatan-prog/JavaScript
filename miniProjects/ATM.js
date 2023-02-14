// tries if fail
// counter
// what do u want to do, nequi or atm
class userATM {
    constructor(moneyToWiDraw) {
        this.moneyInBank = 5_000_000;
        this.genPassword = 'password';
        this.moneyToWiDraw = moneyToWiDraw;
    }
    
    // Methods
    passWord(userPassword) {
        if (userPassword !== this.genPassword) {

        }
    }

    withDraw() {
        let remainer;
        if (this.moneyInBank >= this.moneyToWiDraw) {
            remainer = this.moneyInBank - this.moneyToWiDraw
        } else {
            console.log("You don't have that much money avaible")
        }

        return `The remainer in the bank is: ${remainer}`;
    }

    getPaper() {

    }
}

class userNequiATM extends userATM {

}

const userOne = new userATM(6_000_000);
console.log(userOne.passWord("password"))