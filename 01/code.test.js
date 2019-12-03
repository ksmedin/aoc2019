const code = require('./code');
const input = require('./input');

describe('Calculate fuel for mass', () => {
    it.each([
        [12, 2],
        [14, 2],
        [1969, 654],
        [100756, 33583]
    ])('for a mass of %s, fuel required is %s', (mass, fuel) => {
        const requiredFuel = code.calculateFuelForMass(mass);
        expect(requiredFuel).toEqual(fuel);
    });
});

describe('Calculate fuel for mass including fuel mass', () => {
    it.each([
        [12, 2],
        [14, 2],
        [1969, 966],
        [100756, 50346]
    ])('for a mass of %s, fuel required is %s', (mass, fuel) => {
        const requiredFuel = code.calculateFuelForMassIncludingFuelMass(mass);
        expect(requiredFuel).toEqual(fuel);
    });
})

describe('Get final answer', () => {
    it('Day 1 puzzle 1', () => {
        const result = input.reduce((p, c) => p + code.calculateFuelForMass(c), 0);
        console.log(`Day 1 Puzzle 1: ${result}`);
    });
    
    it('Day 1 puzzle 2', () => {
        const result = input.reduce((p, c) => p + code.calculateFuelForMassIncludingFuelMass(c), 0);
        console.log(`Day 1 Puzzle 1: ${result}`);
    });
});