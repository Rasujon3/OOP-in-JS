class Hero {
  constructor(name, power) {
    this.name = name;
    this.power = power;
  }
  getPower() {
    if (this.power) {
      return this.power;
    }
    return "I have no power";
  }
  goForGrocery(budget) {
    if (this.power && budget > 1000) {
      console.log(this.getPower());
    }
    return "Price is too high, I can not buy";
  }
}

const catman = new Hero("catman", "Deep khamchi");
console.log(catman.goForGrocery(1050));
