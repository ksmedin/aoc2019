const getDistanceFromCentralPortToClosestIntersection = ([firstWirePath, secondWirePath]) => {
    const pathOne = getWirePath(firstWirePath);
    const pathTwo = getWirePath(secondWirePath);

    const parseStringToPoint = strPoint => { const s = strPoint.split(','); return { x: parseInt(s[0]), y: parseInt(s[1])}};
    const intersections = [...pathOne.keys()]
        .filter(p1 => pathTwo.has(p1))
        .map(parseStringToPoint);

    const sum = intersections.map(i => Math.abs(i.x) + Math.abs(i.y));
    return Math.min(...sum);
}

const getFewestNumberOfCombinedStepsToAnyIntersection = ([firstWirePath, secondWirePath]) => {
    const pathOne = getWirePath(firstWirePath);
    const pathTwo = getWirePath(secondWirePath);

    const something = [...pathOne.entries()]
        .filter(([p1pos]) => pathTwo.has(p1pos))
        .map(([position, steps]) => pathTwo.get(position) + steps);

    return Math.min(...something);
}

const getWirePath = wire => {
    const path = new Map();
    const addPoint = (x, y, steps) => path.set(`${x},${y}`, steps);

    let x = 0;
    let y = 0;
    let steps = 0;
    wire.split(',').forEach(w => {
        let d = w[0];
        let p = parseInt(w.substring(1));
        
        for (let i = 0; i < p; i++) {
            ++steps;
            switch (d) {
                case 'U':
                    addPoint(x, ++y, steps);
                    break;
                case 'D':
                    addPoint(x, --y, steps);
                    break;
                case 'L':
                    addPoint(--x, y, steps);
                    break;
                case 'R':
                    addPoint(++x, y, steps);
                    break;
                }
        }
    });

    return path;
}

module.exports.getDistanceFromCentralPortToClosestIntersection = getDistanceFromCentralPortToClosestIntersection;
module.exports.getFewestNumberOfCombinedStepsToAnyIntersection = getFewestNumberOfCombinedStepsToAnyIntersection;