const Fighter = require("./fighter.jsx");

class JudoMaster extends Fighter {
  constructor(name, scaredLevel) {
    //Fighter class
    super(name, 50, 50, 50); // calling our Fighter class
    this.scaredLevel = scaredLevel;
  }

  flip() {
    super.duck();
    this.health += 10;
    console.log("I'm flipping out");
    return this;
  }

  attack(target) {
    target.health -= this.strength;
    console.log(
      `${this.name} attacked ${target.name}, dealing ${this.strength} damage!`
    );
    console.log(`${target.name} now has ${target.health} HP.`);
  }
}

const Nima = new JudoMaster("Nima Bazofti", 5);
const Veronika = new JudoMaster("Veronika Kontos", 5);
const Stephanie = new JudoMaster("Stephanie Grasso", 5);
const dwayneTheRock = new Fighter("The Rock", 50, 50, 50);

const kimbo = new Fighter("Kimbo Slice", 100, 50, 25);
const theRock = new Fighter("The Rock", 100, 50, 25);

// Veronika.showStats();
// Nima.flip();
// Veronika.flip();
// console.log("--------------------------------------------");
// Nima.showStats();
// Veronika.showStats();
// console.log("--------------------------------------------");
// Nima.attack(Veronika);
// Veronika.attack(Nima);
// Stephanie.finishThem(Veronika);

// console.log("--------------------------------------------");
// Nima.showStats();
// Veronika.showStats();

// Nima.attack(dwayneTheRock);
// theRock.attack(dwayneTheRock);
// kimbo.attack(theRock);

module.exports = JudoMaster;
