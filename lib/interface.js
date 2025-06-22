const { rawListeners } = require('process');
const readline = require('readline');

class Radicals {
    constructor() {
        this.input = "";
    }

    async getInput() {

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        return await Promise((resolve) => {
            // on reject we want to call the method again

            rl.question("Enter your radical problem: ", (inpt) => {

            });

        });
    }


}

module.exports = {
    Radicals,
}
