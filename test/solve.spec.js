const chai = require('chai');
const expect = chai.expect;

const spies = require('chai-spies');
chai.use(spies);

const { Solve } = require('../lib/solve');
const { Radicals } = require('../lib/interface');

describe('Solve', function () {

    it('should initialize the Solve Class', function () {
        expect(Solve).to.exist;
    });

    let solve;

    before(function () {
        solve = new Solve();
    });

    describe('construction', function () {

        it('should initialize the interface class', function () {
            expect(solve.interface).to.be.an.instanceOf(Radicals);
        });

    });

    describe('Convert', function () {

        it('should a string input into a number', function () {
            let input = '72';
            let expected = solve.convert(input);
            expect(expected).to.equal(72);
        });

    });

    describe('findFactors', function () {

        it('should return a 2-D array where each indices represents [factor, divisor]', function () {
            let input = 12;
            let expected = [[2, 6], [3, 4], [4, 3], [6, 2]];
            let result = solve.findFactors(input);

            expect(result.length === expected.length).to.be.true;

            for (let i = 0; i < expected.length; i++) {
                let [factor, divisor] = expected[i];
                let [arg1, arg2] = result[i];

                expect(arg1 === factor && arg2 === divisor).to.be.true;
            }

        });

    });

    describe('SolveNumber', function () {

        it('should retrieve the users input and return the result of the number piece of the expression if applicable.', function () {
            this.timeout(20000);
            let expected = { wholeNumber: "2", radical: `3`};
            let result = solve.solveNumber('12');

            console.log(result, ' : ', expected);
            expect(result.wholeNumber === expected.wholeNumber && result.radical === expected.radical).to.be.true;
        });

    });

    describe('SolveVariable', function () {

        it('should retrieve the users input and return the result of the variable piece of the expression if applicable.', function () {
            this.timeout(20000);
            let expected = { wholeNumber: "x", radical: `x`};
            let result = solve.solveVariable('x^3'); // x^3

            console.log(result, ' : ', expected);
            expect(result.wholeNumber === expected.wholeNumber && result.radical === expected.radical).to.be.true;
        });

    });

    describe('SolveExpression', function () {

        context('should reconignize what part of the expression is a number and a variable', function () {

            it('should call solveNumber', function () {
                let numSpy = chai.spy.on(solve, 'solveNumber');
                solve.solveExpression('12x^3');
                expect(numSpy).to.have.been.called.once;
                chai.spy.restore(solve, 'solveNumber');
            });

            it('should call solveVariable', function () {
                let varSpy = chai.spy.on(solve, 'solveVariable');
                solve.solveExpression('12x^3');
                expect(varSpy).to.have.been.called.once;
                chai.spy.restore(solve, 'solveVariable');
            });

            it('should return array that with nested objects that represent the solutions of solveNumber and solveVariable', function () {
                let result = solve.solveExpression('12x^3');
                let expected = [
                    { wholeNumber: "2", radical: `3`},
                    { wholeNumber: "x", radical: `x`}
                ];

                expect(result.length).to.equal(2);

                for (let i = 0; i < expected.length; i++) {
                    expect(expected.wholeNumber === result.wholeNumber && expected.radical === result.radical).to.be.true;
                }

            });

        });

    });

});
