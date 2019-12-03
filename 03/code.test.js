const code = require('./code');
//const input = require('./input');

describe('get distance from central port to closest intersection', () => {
    it.each([
        [['R8,U5,L5,D3', 'U7,R6,D4,L4'], 6],
        [['R75,D30,R83,U83,L12,D49,R71,U7,L72', 'U62,R66,U55,R34,D71,R55,D58,R83'], 159],
        [['R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51', 'U98,R91,D20,R16,D67,R40,U7,R15,U6,R7'], 135],
    ])('the two wires should intersect after a distance of: %i', (wires, expectedDistanceToIntersection) => {
        const distance = code.getDistanceFromCentralPortToClosestIntersection(wires);
        expect(distance).toBe(expectedDistanceToIntersection);
    });
});

// describe('get final answer', () => {
//     it('Day 3 puzzle 1', () => {
//         console.log('final');
//         const distance = code.getDistanceFromCentralPortToClosestIntersection(input);
//         console.log(`Day 2 Puzzle 1: ${distance}`);
//         expect(distance).toBe(1337);
//     });
    
//     // it('Day 3 puzzle 2', () => {
        
//     // });
// });