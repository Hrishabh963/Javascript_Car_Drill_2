module.exports = function getCarYears(inventory) {
    const carYears = inventory.map(car => car.car_year);
    return carYears;
}