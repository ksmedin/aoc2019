
const calculateFuelForMass = (mass) => {
    return Math.floor(mass / 3) - 2;
}

const calculateFuelForMassIncludingFuelMass = (mass) => {
    const fuel = calculateFuelForMass(mass);
    return fuel <= 0 ? fuel : fuel + Math.max(calculateFuelForMassIncludingFuelMass(fuel), 0);
}

module.exports.calculateFuelForMass = calculateFuelForMass;
module.exports.calculateFuelForMassIncludingFuelMass = calculateFuelForMassIncludingFuelMass;