const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);

const { Radicals } = require('../lib/simplifyRadical');

describe('Radicals', function () {

    it('should initialize the class', function () {
        expect(Radicals).to.exist;
    });

    let radical;

    beforeEach(function () {
        radical = new Radicals();
    });

    describe('constructor', function () {

        it('should initialize an property called input to an empty string', function () {
            expect(radical.input).to.equal("");
        });

    });

    describe('getInput', function () {

        it('should get an input from the user', async function () {
            let str = await radical.getInput();
            expect(str).to.be.a('Promise'); // or String
            return;
        });

    });

    describe('isRadical', function () {

        context('When True', function () {

            it('should check if the input contains only numbers', async function () {
                let str = await radical.getInput();
                let bool = radical.isRadical(str);
                return expect(bool).to.be.true;
            });

        });

        context('When False', function () {

            it('should check if the input contains only numbers', async function () {
                let str = await radical.getInput();
                let bool = radical.isRadical(str);
                return expect(bool).to.be.false;
            });

        });

    });

});
