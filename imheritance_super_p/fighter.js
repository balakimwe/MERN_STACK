class Fighter {
  constructor(name, health, speed, strength) {
    //name, health, speed, strength
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
  }
  punch() {
    this.speed -= 1;
    this.strength -= 2;
    console.log("Rawwrrrr");
    return this;
  }

  duck() {
    this.health += 10;
    this.speed -= 1;
    this.strength -= 2;
    console.log("I'm ducking!!");
    return this;
  }
  attack(target) {
    target.health -= this.strength;
    console.log(
      `${this.name} attacked ${target.name}, dealing ${this.strength} damage!`
    );
    console.log(`${target.name} now has ${target.health} HP.`);
  }
  showStats() {
    console.log(
      `The fighter ${this.name} stats are: \nHealth: ${this.health}\nSpeed: ${this.speed}\nStrength: ${this.strength}`
    );
    return this;
  }
}

// kimbo.showStats();
// console.log("--------------------------------------------");
// theRock.showStats();

// console.log("--------------------------------------------");
// kimbo.punch().punch().punch().punch();
// kimbo.showStats();
// console.log("--------------------------------------------");
// kimbo.duck().duck().duck().duck();
// kimbo.showStats();
// console.log("--------------------------------------------");

module.exports = Fighter;
