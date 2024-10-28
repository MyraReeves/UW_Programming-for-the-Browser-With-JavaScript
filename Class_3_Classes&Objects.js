// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`

class SpaceShip {
    constructor(name='The spaceship', topSpeed='top speed') {
        this.name = name;
        this.topSpeed = topSpeed;
    }

    accelerate() {
        const {name, topSpeed} = this;
        console.log(`${name} moving to ${topSpeed}`)
    }
};


// 2. Call the constructor function to create a couple ships, 
const spaceShip1 = new SpaceShip('Enterprise', 'Warp 8.0');
const spaceShip2 = new SpaceShip('Voyager', 'Warp 9.9');

// Then call accelerate on both of them:
spaceShip1.accelerate();
spaceShip2.accelerate();


// Testing default values "The spaceship" and "top speed":
const spaceShip3 = new SpaceShip();
spaceShip3.accelerate();
