class Animal {
  static category = "Dog";
  location = "Khamar bari";
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
  static compare(animal1, animal2) {
    if (animal1.speed > animal2.speed) {
      return `${animal1.name} is Faster.`;
    } else {
      return `${animal2.name} is Faster.`;
    }
  }
}

const myRat = new Animal("rat", 112);
const myDog = new Animal("dog", 50);
console.log(Animal.compare(myRat, myDog));
// console.log(Animal.category);
// console.log(myRat.category);
// console.log(myRat.location);
// console.log(Animal.location);
