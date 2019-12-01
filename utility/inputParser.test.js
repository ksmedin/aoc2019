const inputParser = require('./inputParser');

describe('input parser', () => {
    it('should split the input on newline into array', () => {
        const input = `56123
        145192
        123702`;

        const expected = ['56123', '145192', '123702'];

        const result = inputParser.splitOnNewlineIntoArray(input);
        expect(result.length).toBe(3);
        expect(result).toEqual(expected);
    });
});