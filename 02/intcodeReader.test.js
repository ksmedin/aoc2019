const intcodeReader = require('./intcodeReader');
const input = require('./input');

describe('intcode reader - interpretIntcode', () => {
    it.each([
        ['1,0,0,0,99', '2,0,0,0,99'],
        ['2,3,0,3,99', '2,3,0,6,99'],
        ['2,4,4,5,99,0', '2,4,4,5,99,9801'],
        ['1,1,1,4,99,5,6,0,99', '30,1,1,4,2,5,6,0,99']
    ])('an intcode of %s should generate %s', (intcode, expected) => {
        const parsed = intcode.split(',').map(i => parseInt(i));
        const result = intcodeReader.interpretIntcode(parsed);
        const reStringed = result.join(',');
        expect(reStringed).toEqual(expected);
    });
});

describe('intcode reader - whichNounAndVerbProduceWantedOutput', () => {
    it('should give 12 and 2 as noun and verb', () => {
        const { noun, verb } = intcodeReader.whichNounAndVerbProduceWantedOutput(input, 3790689);
        expect(noun).toEqual(12);
        expect(verb).toEqual(2);
    });
});

describe('get final answer', () => {
    it('Day 2 puzzle 1', () => {
        const intcode = [...input];
        intcode[1] = 12;
        intcode[2] = 2;
        const [ output ] = intcodeReader.interpretIntcode(intcode);
        console.log(`Day 2 Puzzle 1: ${output}`);
        expect(output).toBe(3790689);
    });
    
    it('Day 2 puzzle 2', () => {
        const { success, noun, verb } = intcodeReader.whichNounAndVerbProduceWantedOutput(input, 19690720);
        const answer = success ? 100 * noun + verb : 'unknown';
        console.log(`Day 2 Puzzle 2: ${answer}`);
    });
});