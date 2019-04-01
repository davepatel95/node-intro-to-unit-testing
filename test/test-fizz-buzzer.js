const expect = require('chai').expect;

// import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for 'fizzBuzzer' function
describe('fizzBuzzer', function() {

    // testing normal case
    it('should see if divisible by 3, 5, or 15', function() {
        const normalCases = [
            {a:9, expected:'fizz'},
            {a:20, expected:'buzz'},
            {a:-75, expected:'fizz-buzz'},
        ];

        normalCases.forEach(function(input) {
            const answer = fizzBuzzer(input.a);
            expect(answer).to.equal(input.expected);
        });
    });

    it('should raise error if arguments not numbers', function() {
        // test for bad inputs, should return error
        const badInputs = [
            ['a', 1],
            ['2', 2]
        ];

        badInputs.forEach(function(input) {
            expect(function() {
                fizzBuzzer(input[0]);
            }).to.throw(Error);
        });
    });
});
