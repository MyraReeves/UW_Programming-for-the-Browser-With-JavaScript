/*
 Create a Car class that creates instances with the following properties and methods:

 • currentSpeed: initially set to zero
 • model: set by constructor function
 • accelerate: function, increases current speed by 1
 • brake: function, decreases current speed by 1
 • toString: function, returns a string representation of the object

 Determine what goes on the instance vs the prototype.
 */

class Car {
    constructor(model){
        this.model = model;
        this.currentSpeed = 0;
    }

    accelerate(){
        this.currentSpeed++;
    }

    brake(){
        this.currentSpeed--;
    }

    toString(){
        console.log(`The ${this.model} is traveling ${this.currentSpeed} mph`)
    }
};

//  Create an instance:
const prius = new Car('Prius');

//  Accelerate twice, brake once, and console log the instance.toString()
prius.accelerate();
prius.accelerate();
prius.brake();
prius.toString();


/*
Create an ElectricCar class that inherits from Car, with the following additional properties and methods:
 • motorinstance property set to "electric"
 • accelerate method that calls the inherited class accelerate method twice every time it is run (electric vehicles accelerate faster!)
 • different toString function from inherited class
 */
class ElectricCar extends Car {
    constructor(model){
        super(model);
        this.motorinstance = 'electric';
    }
    accelerate(){
        super.accelerate();
        super.accelerate();
    }
    toString(){
        return(`The ${this.model} is an ${this.motorinstance} vehicle and it is currently traveling ${this.currentSpeed} mph`)
    }
};

// Create an instance:
const sportage = new ElectricCar('Kia Sportage');

//  Accelerate twice, brake once, and console log the instance.toString()
sportage.accelerate();
sportage.accelerate();
sportage.brake();
console.log(sportage.toString());
