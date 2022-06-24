class Pendrive {
  constructor(capacity, color, price) {
    this.capacity = capacity;
    this.color = color;
    this.price = price;
  }
}

// create object
const ignite = new Pendrive("36GB", "White", 1300);
console.log(ignite);
const oakwood = new Pendrive("4GB", "black");
console.log(oakwood);
