const { Radicals } = require('../lib/interface');

class Solve {
    constructor() {
        this.interface = new Radicals();
    }

    convert(strNum) {
        let intNum = parseInt(strNum);
        return intNum;
    }

    findFactors(num) {
        let arr = [];

        for (let i = 2; i <= num / 2; i++) {
            if (num % i === 0) arr.push([i, num / i]);
        }

        return arr;
    }

    async solveExpression() {
        let arg = await this.interface.getInput();

        let visited = new Set();
        visited.add(arg);

        let queue = [ [arg, 1] ];

        while (queue.length) {
            let node = queue.pop(); // node === [node, divisor]

            let factors = this.findFactors(node[0]);

            for (let i = 0; i < factors.length; i++) {
                // node === [factor, divisor];
                let factor = factors[i];

                // is the factor raised to the second power === to node
                if (Math.sqrt(node[0]) === factor[0]) {

                    if (factor[0] === factor[1]) { // perfect square
                        return `${factor[0]}${String.fromCharCode(8730)}${node[1]}`;
                    } else {
                        return `${factor[0]}${String.fromCharCode(8730)}${factor[0]}`;
                    }

                }

                if (!visited.has(factor[0])) {
                    visited.add(factor[0]);
                    queue.push(factor);
                }

            }

        }

        return `${String.fromCharCode(8730)}${arg}`;
    }

}

const calculate = new Solve();

async function getUserInput() {
    let result = await calculate.solveExpression();
    console.log(result);
}

// getUserInput();

module.exports = {
    Solve,
}
