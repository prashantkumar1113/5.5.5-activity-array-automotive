//this includes the vehicle class as a module
//const VehicleModule = require("./vehicle");
const { Vehicle } = require("./vehicleBaseClass");

class Car extends Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
}

//this shows how to call from this module...
let v = new Car("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make);
