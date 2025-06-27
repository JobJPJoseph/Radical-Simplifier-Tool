const chai = require('chai');
const expect = chai.expect;

const spies = require('chai-spies');
chai.use(spies);

const { Solve } = require('../lib/solve');

describe('Solve', function () {

    it('should initialize the Solve Class', function () {
        expect(Solve).to.exist;
    });

    describe('Construction', function () {

        it('should initialize the interface class', function () {

        });

    });

});
