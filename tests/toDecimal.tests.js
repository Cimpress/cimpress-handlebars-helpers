const handlebars = require('handlebars');
const expect = require('chai').expect;

let toDecimalHelper = require('../src/index').toDecimalHelper;

describe('convert number to decimal', function() {
    before(() =>{
        handlebars.registerHelper('toDecimal', toDecimalHelper);
    })
    it('works as expected', function() {
        const fm = handlebars.compile('{{toDecimal 12345 2}}');
        const result = fm();
        expect(result).to.equal('123.45');
    });

    it('when input is a string', function() {
        const fm = handlebars.compile('{{toDecimal number 2}}');
        const result = fm({number: 'qq'});
        expect(result).to.equal('NaN');
    });

    it('when fraction digit is a string', function() {
        const fm = handlebars.compile('{{toDecimal 12345 n}}');
        const result = fm({n:'a'});
        expect(result).to.equal('NaN');
    });

    it('when fraction digit and input number is a string', function() {
        const fm = handlebars.compile('{{toDecimal number fraction}}');
        const result = fm({number:'a', fraction: 'zz'});
        expect(result).to.equal('NaN');
    });

});
