const fuelCalculator = require('./fuelCalculator');
const input = require('./input');

describe('Fuel calculator - calculateFuelForMass', () => {
    it.each([
        [12, 2],
        [14, 2],
        [1969, 654],
        [100756, 33583]
    ])('for a mass of %s, fuel required is %s', (mass, fuel) => {
        const requiredFuel = fuelCalculator.calculateFuelForMass(mass);
        expect(requiredFuel).toEqual(fuel);
    });
});

describe('Fuel calculator - calculateFuelForMassIncludingFuelMass', () => {
    it.each([
        [12, 2],
        [14, 2],
        [1969, 966],
        [100756, 50346]
    ])('for a mass of %s, fuel required is %s', (mass, fuel) => {
        const requiredFuel = fuelCalculator.calculateFuelForMassIncludingFuelMass(mass);
        expect(requiredFuel).toEqual(fuel);
    });
})

describe('Get final answer', () => {
    it('Day 1 puzzle 1', () => {
        const result = input.reduce((p, c) => p + fuelCalculator.calculateFuelForMass(c), 0);
        console.log(`Day 1 Puzzle 1: ${result}`);
    });
    
    it('Day 1 puzzle 2', () => {
        const result = input.reduce((p, c) => p + fuelCalculator.calculateFuelForMassIncludingFuelMass(c), 0);
        console.log(`Day 1 Puzzle 1: ${result}`);
    });
});