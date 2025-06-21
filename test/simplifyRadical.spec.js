const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);

const [simplifyRadical] = require('../lib/simplifyRadical');

describe('Simplify Radical', function () {

    it('should initialize the function', function () {
        expect(simplifyRadical).to.exist;
        expect(simplifyRadical).to.be.a('function');
    });

    it('should accept single expression', function () {
        let expression = `${String.fromCharCode(8730)}25`;
        let radTwentyFiveSpy = chai.spy.on(Object, 'simplifyRadical');
        simplifyRadical(expression);

        expect(radTwentyFiveSpy).to.have.been.called.with(expression);
    });

});
