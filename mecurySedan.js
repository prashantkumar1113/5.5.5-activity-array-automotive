//this includes the vehicle class as a module
//const VehicleModule = require("./vehicle");
const { Vehicle } = require("./vehicleBaseClass");

class Car extends Vehicle {
    constructor(make, model, year, color, mileage, fuelType, type) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.numberOfWheels = 4;
        this.fuelType = fuelType;
        this.type = type;
        this.availableRoom = true;
        this.fuel = 0;
        this.start = false;
        this.timeForMaintenance = false;
    }
    loadPassengers(num) {
        if (num < this.maxPassengers) {
            this.availableRoom = true;
        } else {
            this.availableRoom = false;
        }
    }

    startCar() {
        if (this.fuel > 0) {
            this.start = true;
        }
    }

    scheduleService(milage) {
        this.milage = milage;
        if (this.milage > 30000) {
            this.scheduleService = true;
        }
    }

    addFuel(fuel) {
        this.fuel += fuel;
    }
}

//this shows how to call from this module...
let tesla = new Car(
    "Tesla",
    "Model Y",
    "2021",
    "white",
    2653,
    "electric",
    "suv"
);
tesla.addFuel(200);
tesla.startCar();
console.log(tesla);
