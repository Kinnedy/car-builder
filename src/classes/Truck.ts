// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  // TODO: Declare properties of the Truck class
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)
  towingCapacity: number;
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];



  // TODO: Create a constructor that accepts the properties of the Truck class
  // TODO: The constructor should call the constructor of the parent class, Vehicle
  // TODO: The constructor should initialize the properties of the Truck class
  // TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
  constructor(vin: string, color: string, make: string, model: string, year: number, weight: number, topSpeed: number, wheels: Wheel[], towingCapacity: number) {
    super();
    this.towingCapacity = towingCapacity;
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels;
  }

  // TODO: Implement the tow method from the AbleToTow interface DONE
  tow(vehicle: Truck | Motorbike | Car): void {
    // TODO: Get the make an model of the vehicle if it exists DONE
    let name: string = "";
    if (this.make && this.model) {
      name = this.make + " " + this.model;
    } else {
      name = "Vehicle";
    }

    // TODO: Check if the vehicle's weight is less than or equal to the truck's towing capacity DONE
    // TODO: If it is, log that the vehicle is being towed DONE
    // TODO: If it is not, log that the vehicle is too heavy to be towed DONE
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`${name} is being towed`);
    } else {
      console.log(`${name} is too heavy to be towed`);
    }
  }


  // TODO: Override the printDetails method from the Vehicle class DONE
  override printDetails() {


    // TODO: The method should call the printDetails method of the parent class DONE
    super.printDetails();
    // TODO: The method should log the details of the Truck DONE
    // TODO: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels DONE
    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight}`);
    console.log(`Top Speed: ${this.topSpeed}`);
    console.log(`Color: ${this.color}`);
    console.log(`Towing Capacity: ${this.towingCapacity}`);
    console.log(`Wheels: ${this.wheels}`);
  }
};
// Export the Truck class as the default export
export default Truck;
