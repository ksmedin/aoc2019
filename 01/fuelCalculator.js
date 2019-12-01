
const calculateFuelForMass = (mass) => {
    return Math.floor(mass / 3) - 2;
}

const calculateFuelForMassIncludingFuelMass = (mass) => {
    const fuel = calculateFuelForMass(mass);
    return calculateFuelForMass(fuel) <= 0 ? fuel : fuel + calculateFuelForMassIncludingFuelMass(fuel);
}

module.exports.calculateFuelForMass = calculateFuelForMass;
module.exports.calculateFuelForMassIncludingFuelMass = calculateFuelForMassIncludingFuelMass;