module.exports = function countCarYearsOlderThan2000(inventory) {
    const olderCars = inventory.filter(car => car.car_year < 2000);
    return olderCars;
}