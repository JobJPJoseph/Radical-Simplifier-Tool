const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);

const { Radicals } = require('../lib/interface');

describe('Radicals', function () {

    it('should initialize the class', function () {
        expect(Radicals).to.exist;
    });

    let radical;

    before(function () {
        radical = new Radicals();
    });

    describe('constructor', function () {

        it('should initialize an property called input to an empty string', function () {
            expect(radical.input).to.equal("");
        });

    });

    describe('getInput', function () {

        it('should get an input from the user', async function () {
            this.timeout(20000);
            let str = await radical.getInput();
            return expect(str).to.be.a('String'); // or String
        });

    });

    describe('validInput', function () {

        let validInputs = new Set(['a','b','c','d','e','f','g','h',
            'i','j','k','l','m','n','o','p','q',
            'r','s','t','u','v','w','x','y','z','^',
            '0','1','2','3','4','5','6','7','8','9'
        ]);

        it('Radical.getInput should also call Radical.validInput', async function () {
            this.timeout(20000);
            let inpSpy = chai.spy.on(radical, 'validInput');
            await radical.getInput();
            return expect(inpSpy).to.have.been.called.once;
        });

        context('When True', function () {

            it('should check if the input contains only numbers and letters or a mix', async function () {
                this.timeout(20000);
                let result = await radical.getInput();

                for (let i = 0; i < result.length; i++ ) {
                    let char = result[i];
                    expect(validInputs.has(char)).to.be.true;
                }

                return expect(result).to.be.a('String');
            });

        });

        context('When False', function () {

            it('should check if the input contains only numbers', async function () {
                this.timeout(20000);
                let bool = await radical.getInput();
                return expect(bool).to.be.false;
            });

        });

    });

});
