const JudoMaster = require("./judo.jsx");

class Karate extends JudoMaster {
  constructor(name) {
    super(name, 5);
  }
  finishThem(them) {
    them.health -= 5000;
    them.scaredLevel += 5;
    console.log(
      `${this.name} attacked ${them.name}, dealing the final blow of 5000 damage!`
    );
    console.log(
      `${them.name} now has ${them.health} HP and scared level is ${this.scaredLevel}.`
    );
  }
}

const Andriy = new Karate("Andriy Ostapyuk");
const Nima = new Karate("Nima");

Andriy.attack(Nima);
