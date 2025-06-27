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
            expect(expected).to.equal(72).and.to.be.instanceOf(Number);
        });

    });

    describe('Factors', function () {

        it('should return a 2-D array where each indices represents [factor, divisor]', function () {
            let input = 12;
            let expected = [[2, 6], [3, 4], [4, 3], [6, 2]];
            let result = solve.factors(input);

            expect(result.length === expected.length).to.be.true;

            for (let i = 0; i < expected.length; i++) {
                let [factor, divisor] = expected[i];
                let [arg1, arg2] = result[i];

                expect(arg1 === factor && arg2 === divisor).to.be.true;
            }

        });

    });

    describe('SolveExpression', function () {

        it('should retrieve the users input and return the result of the expression if applicable.', async function () {
            this.timeout(20000);
            let expected = `2${String.fromCharCode(8730),3}`; // if its 12
            let result = await solve.solveExpression();

            expect(result === expected).to.be.true;
        });

    });

});
