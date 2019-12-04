const code = require('./code');
const input = require('./input');

describe('get number of passwords part one', () => {
    it.each([
        [[111111, 111111], 1],
        [[223450, 223450], 0],
        [[123789, 123789], 0]
    ])('the lower -and upper bounds should yield %i valid password', ([lowerBound, upperBound], expectedNumberOfValidPasswords) => {
        const validPasswords = code.getNumberOfPasswordsPartOne(lowerBound, upperBound);
        expect(validPasswords).toBe(expectedNumberOfValidPasswords);
    });
});

describe('get number of passwords part two', () => {
    it.each([
        [[111111, 111111], 0],
        [[223450, 223450], 0],
        [[223456, 223456], 1],
        [[123789, 123789], 0],
        [[123788, 123788], 1],
        [[112233, 112233], 1],
        [[111122, 111122], 1],
    ])('the lower -and upper bounds should yield %i valid password', ([lowerBound, upperBound], expectedNumberOfValidPasswords) => {
        const validPasswords = code.getNumberOfPasswordsPartTwo(lowerBound, upperBound);
        expect(validPasswords).toBe(expectedNumberOfValidPasswords);
    });
});

describe('get final answer', () => {
    it('Day 4 puzzle 1', () => {
        const [ lowerBound, upperBound ] = input;
        const validPasswords = code.getNumberOfPasswordsPartOne(lowerBound, upperBound);
        expect(validPasswords).toBe(1660);
    });
    
    it('Day 4 puzzle 2', () => {
        const [ lowerBound, upperBound ] = input;
        const validPasswords = code.getNumberOfPasswordsPartTwo(lowerBound, upperBound);
        expect(validPasswords).toBe(1135);
    });
});