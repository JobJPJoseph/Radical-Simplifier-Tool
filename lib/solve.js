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

    solveNumber(arg) {
        let expression = { wholeNumber: "", radical: "" };

        // let arg = await this.interface.getInput();

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

                        if (node[1] === 1) {
                            expression.wholeNumber = `${factor[0]}`;
                            return expression;
                        } else {
                            expression.wholeNumber = `${factor[0]}`;
                            expression.radical = `${node[1]}`;
                            return expression;
                        }

                    } else {
                        expression.wholeNumber = `${factor[0]}`;
                        expression.radical = `${factor[0]}`;
                        // return `${factor[0]}${String.fromCharCode(8730)}${factor[0]}`;
                        return expression;
                    }

                }

                if (!visited.has(factor[0])) {
                    visited.add(factor[0]);
                    queue.push(factor);
                }

            }

        }

        expression.radical = `${arg}`;
        // return `${String.fromCharCode(8730)}${arg}`;
        return expression;
    }

    solveVariable(arg) {
        let expression = { wholeNumber: '', radical: "" };

        // let arg = await this.interface.getInput();

        if (arg.length === 1) {
            expression.radical = `${arg}`;
            return expression;
        }

        let exp = this.convert(arg.split('^')[1]);

        let wholeNum = 0;
        let remainder = 0;

        let decompose = (exponent) => {
            if (exponent === 0) return;
            if (exponent === 1) {
                remainder = 1;
                return;
            }

            decompose(exponent - 2);

            wholeNum += 1;
        }

        decompose(exp);

        if (remainder) {

            if (wholeNum === 1) {
                expression.wholeNumber = "x";
                expression.radical = "x";
                return expression;
            } else {
                expression.wholeNumber = `x${wholeNum}`;
                expression.radical = `x`;
                return expression;
            }

        } else {

            if (wholeNum === 1) {
                expression.wholeNumber = "x";
                return expression;
            } else {
                expression.wholeNumber = `x${wholeNum}`;
                return expression;
            }
        }

    }

    solveExpression(expression) {
        let results = [];

        let firstChar = expression[0];
        if (Number.isInteger(parseInt(firstChar))) {
            let sub = [];
            let piece = "";
            let i = 0;

            while (Number.isInteger(parseInt(expression[i]))) {
                piece += expression[i];
                i++;
            }

            sub.push(piece);
            piece = "";

            while (i < expression.length) {
                piece += expression[i];
                i++;
            }

            if (piece.length) sub.push(piece);

            let flip = true;
            for (let j = 0; j < sub.length; j++) {

                if (flip) {
                    results.push(this.solveNumber(sub[j]));
                    flip = false;
                } else {
                    results.push((this.solveVariable(sub[j])));
                    flip = true;
                }

            }

        } else {
            results.push(solveVariable(expression));
        }

        return results;
    }

    format(expression) {
        let arr = this.solveExpression(expression);
        let str = "";

        for (let i = 0; i < arr.length; i++) {
            let whole  = arr[i].wholeNumber;
            str += whole;
        }

        for (let j = 0; j < arr.length; j++) {
            if (j === 0 && arr[j].radical) str += String.fromCharCode(8730);
            let rad  = arr[j].radical;
            str += rad;
        }

        return str;
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
