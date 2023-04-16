const Ninja = require("./ninja.js");

class Sensei extends Ninja {
  constructor(name) {
    //Ninja class
    super(name, 200, 10, 10);
    this.wisdom = 10;
  }

  speakWisdom() {
    super.drinkSake();
    return this;
  }
}

const ninja1 = new Sensei("Wise");
ninja1.sayName();
ninja1.showStats();
