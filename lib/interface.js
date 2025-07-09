const readline = require('readline');

class Radicals {
    constructor() {
        this.input = "";
        this.validInputs = new Set(['a','b','c','d','e','f','g','h',
            'i','j','k','l','m','n','o','p','q',
            'r','s','t','u','v','w','x','y','z','^',
            '0','1','2','3','4','5','6','7','8','9'
        ]);

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
                // resolve(this.input); // For tests

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
            if (!this.validInputs.has(inpt[i])) return false;
        }

        return inpt;
    }
}

module.exports = {
    Radicals,
}
