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

        });

    });

    describe('Factors', function () {

        it('should return a 2-D array where each indices represents [factor, divisor]', function () {

        });

    });

    describe('SolveExpression', function () {

        it('should retrieve the users input and return the result of the expression if applicable.', function () {

        });

    });

});
