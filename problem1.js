module.exports = function findCarWithId33(inventory) {
    const carWithId33 = inventory.find(car => car.id === 33);
    return carWithId33;
}