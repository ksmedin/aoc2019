const getDistanceFromCentralPortToClosestIntersection = ([firstWirePath, secondWirePath]) => {
    console.log('first..')
    const pathOne = getWirePath(firstWirePath);
    console.log('second..')
    const pathTwo = getWirePath(secondWirePath);
    console.log('filtering..')
    console.log(pathOne.length)
    console.log(pathTwo.length)

    const intersections = pathOne.filter(p1 => pathTwo.some(p2 => p1.x == p2.x && p1.y == p2.y));
    console.log('done..')
    console.log(intersections);
    const sum = intersections.map(i => Math.abs(i.x) + Math.abs(i.y));
    const minDistance = Math.min(...sum);
    return minDistance;
}

const getWirePath = wire => {
    const path = [];
    const addPoint = (x, y) => path.push({ x, y });

    let x = 0;
    let y = 0;
    wire.split(',').forEach(w => {
        let d = w[0];
        let p = parseInt(w.substring(1));
        
        for (let i = 0; i < p; i++) {
            switch (d) {
                case 'U':
                    addPoint(x, ++y);
                    break;
                case 'D':
                    addPoint(x, --y);
                    break;
                case 'L':
                    addPoint(--x, y);
                    break;
                case 'R':
                    addPoint(++x, y);
                    break;
                }
        }
    });

    return path;
}

module.exports.getDistanceFromCentralPortToClosestIntersection = getDistanceFromCentralPortToClosestIntersection;