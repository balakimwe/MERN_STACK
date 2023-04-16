class Ninja {
  constructor(name, health = 10) {
    //name, health.......
    this.name = name;
    this.health = health;
    this.speed = 3;
    this.strength = 3;
  }
  sayName() {
    console.log(`My name is ${this.name}`);
    return this;
  }

  showStats() {
    console.log(
      `The Ninja ${this.name} stats are: \nHealth: ${this.health}\nSpeed: ${this.speed}\nStrength: ${this.strength}`
    );
    return this;
  }
  drinkShake() {
    this.health += 10;
    return this;
  }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
