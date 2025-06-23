const readline = require('readline');

class Radicals {
    constructor() {
        this.input = "";
        this.numbers = new Set();

        for (let i = 0; i < 10; i++) {
            this.numbers.add(`${i}`);
        }
    }

    async getInput() {

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        return await new Promise((resolve) => {
            // on reject we want to call the method again

            rl.question("Enter your radical problem: ", (inpt) => {
                rl.close();
                this.input = this.validInput(inpt);
                // resolve(this.input);

                if (this.input) {
                    resolve(this.input);
                } else {
                    resolve(this.getInput());
                }
            });

        });

    }

    validInput(inpt) {
        for (let i = 0; i < inpt.length; i++) {
            if (!this.numbers.has(inpt[i])) return false;
        }

        return inpt;
    }
}

module.exports = {
    Radicals,
}
