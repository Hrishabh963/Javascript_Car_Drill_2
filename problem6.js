module.exports = function getBMWAndAudiCars(inventory) {
    const BMWAndAudi = inventory.filter(car => car.car_make === 'BMW' || car.car_make === 'Audi')
    return BMWAndAudi;
}