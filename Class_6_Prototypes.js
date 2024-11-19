/**
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
