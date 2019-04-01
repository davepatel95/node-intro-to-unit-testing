const expect = require('chai').expect;

// import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for 'fizzBuzzer' function
describe('fizzBuzzer', function() {

    // testing normal case
    it(`should return 'fizz-buzz' if divisible by 15`, function() {
        [30,-75,1515].forEach(function(input) {
            expect(fizzBuzzer(input)).to.equal('fizz-buzz');
        });
    });

    it(`should return 'fizz' if divisible by 3`, function() {
        [9,-27,3006].forEach(function(input) {
            expect(fizzBuzzer(input)).to.equal('fizz');
        });
    });

    it(`should return 'buzz' if divisible by 5`, function() {
        [25,-70,2530].forEach(function(input) {
            expect(fizzBuzzer(input)).to.equal('buzz');
        });
    });

    it(`should return number if not divisible by 3 or 5`, function() {
        [7,-127,851353].forEach(function(input) {
            expect(fizzBuzzer(input)).to.equal(input);
        });
    });


    it('should raise error if arguments not numbers', function() {
        // test for bad inputs, should return error
        const badInputs = [true, false, function() {}, [1, 4, 5], 'dog'];
        badInputs.forEach(function(input) {
            expect(function() {
                fizzBuzzer(input);
            }).to.throw(Error);
        });
    });
});
